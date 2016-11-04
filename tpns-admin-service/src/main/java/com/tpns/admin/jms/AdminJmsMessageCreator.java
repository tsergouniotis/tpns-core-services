package com.tpns.admin.jms;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Session;

import org.springframework.jms.core.MessageCreator;
import org.springframework.util.StringUtils;

import com.tpns.domain.article.Article;

public class AdminJmsMessageCreator implements MessageCreator {

	private Article adminArticle;

	private String owner;

	private String destination;

	private AdminArticleAction action;

	public AdminJmsMessageCreator(Article adminArticle, String owner, String destination, AdminArticleAction action) {
		super();
		this.adminArticle = adminArticle;
		this.owner = owner;
		this.destination = destination;
		this.action = action;
	}

	@Override
	public Message createMessage(Session session) throws JMSException {
		ObjectMessage message = session.createObjectMessage();
		message.setObject(adminArticle);
		message.setStringProperty("destination", destination);
		message.setStringProperty("owner", owner);
		message.setStringProperty("action", action.name());
		return message;
	}

	public enum AdminArticleAction {
		SAVE,
		UPDATE,
		DELETE;

		public static AdminArticleAction fromValue(String action) {
			AdminArticleAction[] values = AdminArticleAction.values();
			for (AdminArticleAction value : values) {
				if (value.name().equals(action)) {
					return value;
				}
			}
			throw new IllegalArgumentException("No valid status [ " + action + "]. Possible values " + StringUtils.arrayToCommaDelimitedString(values));
		}
	}

}
