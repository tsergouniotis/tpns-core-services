package com.tpns.admin.services;

import javax.validation.Validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tpns.admin.jms.AdminJmsMessageCreator;
import com.tpns.admin.jms.AdminJmsMessageCreator.AdminArticleAction;
import com.tpns.admin.model.AdminArticle;
import com.tpns.admin.repository.ArticleRepository;
import com.tpns.common.validation.ValidationUtils;
import com.tpns.common.validation.errors.TpnsValidationException;
import com.tpns.domain.article.Article;
import com.tpns.domain.errors.GenericException;

@Service
@Transactional
public class ArticleService {

	@Autowired
	private JmsTemplate jmsTemplate;

	@Autowired
	private Validator validator;

	@Autowired
	private ArticleRepository articleRepository;

	public void save(AdminArticle article) throws TpnsValidationException, GenericException {
		try {

			ValidationUtils.invokeValidator(article, validator);

			Article vanilla = article.vanilla();

			Article saved = articleRepository.saveAndFlush(vanilla);

			article.setGuid(saved.getGuid());

			// send to owner
			send(article, article.getOwner(), article.getOwner());

			// send to other destinations
			for (String destination : article.getGuests()) {
				// TODO perform the action validation inside the validator
				send(article, article.getOwner(), destination);
			}

		} catch (TpnsValidationException e) {
			throw e;
		} catch (Exception e) {
			throw new GenericException(e);
		}
	}

	private void send(AdminArticle article, String owner, String destination) {
		AdminArticleAction action = AdminArticleAction.fromValue(article.getAction());
		Article vanillla = article.vanilla();
		AdminJmsMessageCreator jmsMessage = new AdminJmsMessageCreator(vanillla, owner, destination, action);
		jmsTemplate.send(jmsMessage);
	}

}
