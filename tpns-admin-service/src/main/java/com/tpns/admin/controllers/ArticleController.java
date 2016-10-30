package com.tpns.admin.controllers;

import java.util.Map;

import javax.validation.Validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tpns.admin.domain.ArticleId;
import com.tpns.admin.jms.AdminJmsMessageCreator;
import com.tpns.admin.jms.AdminJmsMessageCreator.AdminArticleAction;
import com.tpns.admin.model.AdminArticle;
import com.tpns.admin.repository.ArticleIdRepository;
import com.tpns.common.validation.ValidationUtils;
import com.tpns.domain.article.Article;

@RestController
@RequestMapping("/v1/article")
public class ArticleController {

	@Autowired
	private JmsTemplate jmsTemplate;

	@Autowired
	private Validator validator;

	@Autowired
	private ArticleIdRepository articleIdRepository;

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<AdminArticle> update(@RequestBody AdminArticle article) throws Exception {

		Map<String, String> errors = ValidationUtils.invokeValidator(article, validator);
		if (CollectionUtils.isEmpty(errors)) {

			// flush in order to get the guid
			ArticleId id = articleIdRepository.saveAndFlush(new ArticleId());
			id = articleIdRepository.findOne(id.getId());
			article.setGuid(id.getGuidStr());

			for (String destination : article.getDestinations()) {
				// TODO perform the action validation inside the validator
				AdminArticleAction action = AdminArticleAction.fromValue(article.getAction());
				Article vanillla = article.copy();
				jmsTemplate.send(new AdminJmsMessageCreator(vanillla, destination, action));
			}

			return new ResponseEntity<>(article, HttpStatus.OK);
		} else {
			AdminArticle res = new AdminArticle();
			res.setErrors(errors);
			return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
		}

	}

}
