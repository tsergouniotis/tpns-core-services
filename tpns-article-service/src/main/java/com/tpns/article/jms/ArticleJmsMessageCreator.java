package com.tpns.article.jms;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Session;

import org.springframework.jms.core.MessageCreator;

import com.tpns.domain.article.Article;

public class ArticleJmsMessageCreator implements MessageCreator {

	private Article article;

	public ArticleJmsMessageCreator(Article article) {
		this.article = article;
	}

	@Override
	public Message createMessage(Session session) throws JMSException {
		ObjectMessage message = session.createObjectMessage();
		message.setObject(article);
		message.setStringProperty("destination", "tpnsone");
		return message;
	}

}
