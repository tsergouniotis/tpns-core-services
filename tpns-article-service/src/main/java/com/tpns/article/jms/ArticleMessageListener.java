package com.tpns.article.jms;

import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jms.core.JmsTemplate;

import com.tpns.article.errors.ArticleProcessingException;
import com.tpns.article.services.ArticleService;
import com.tpns.domain.article.Article;

public class ArticleMessageListener implements MessageListener {

	private static final String ACTION = "action";

	private static final Logger LOGGER = LoggerFactory.getLogger(ArticleMessageListener.class);

	@Autowired
	private ArticleService articleService;

	@Autowired
	@Qualifier("successJmsTemplate")
	private JmsTemplate successJmsTemplate;

	@Autowired
	@Qualifier("failureJmsTemplate")
	private JmsTemplate failureJmsTemplate;

	@Override
	public void onMessage(Message message) {

		if (message instanceof ObjectMessage) {
			try {
				ObjectMessage objectMessage = ObjectMessage.class.cast(message);

				Article article = Article.class.cast(objectMessage.getObject());

				String action = objectMessage.getStringProperty(ACTION);

				process(article, action);

			} catch (Exception ex) {
				throw new RuntimeException(ex);
			}
		} else {
			throw new IllegalArgumentException("Message must be of type ObjectMessage");
		}

	}

	private void process(Article article, String action) {

		try {
			doExecute(article, action);
			sendToSuccessQ(article);
		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e);
			sendToErrorQ(article);
		}

	}

	private void doExecute(Article article, String action) throws ArticleProcessingException {
		switch (action) {
		case "SAVE":
			Article saved = articleService.save(article);
			break;

		case "UPDATE":
			Article updated = articleService.save(article);
			break;

		case "DELETE":
			articleService.delete(article.getId());
			break;

		default:
			break;
		}

	}

	private void sendToSuccessQ(Article article) {
		Article a = Article.create(article.getGuid(), article.getContent(), null, article.getAuthor(), article.getStatus(), null, null, null, null);
		successJmsTemplate.send(new ArticleJmsMessageCreator(a));
	}

	private void sendToErrorQ(Article article) {
		Article a = Article.create(article.getGuid(), article.getContent(), null, article.getAuthor(), article.getStatus(), null, null, null, null);
		failureJmsTemplate.send(new ArticleJmsMessageCreator(a));
	}

}
