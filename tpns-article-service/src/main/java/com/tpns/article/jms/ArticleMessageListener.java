package com.tpns.article.jms;

import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.tpns.article.errors.ArticleProcessingException;
import com.tpns.article.services.ArticleService;
import com.tpns.domain.article.Article;

public class ArticleMessageListener implements MessageListener {

	private static final String ACTION = "action";

	private static final Logger LOGGER = LoggerFactory.getLogger(ArticleMessageListener.class);

	@Autowired
	private ArticleService articleService;

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
			sendToSuccessQ();
		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e);
			sendToErrorQ();
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

	private void sendToSuccessQ() {
		throw new UnsupportedOperationException("Send to success queue has not been implemented yet");
	}

	private void sendToErrorQ() {
		throw new UnsupportedOperationException("Send to error queue has not been implemented yet");

	}

}
