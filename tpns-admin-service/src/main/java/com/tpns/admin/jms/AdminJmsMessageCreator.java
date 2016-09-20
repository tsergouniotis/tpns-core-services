package com.tpns.admin.jms;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.ObjectMessage;
import javax.jms.Session;

import org.springframework.jms.core.MessageCreator;

import com.tpns.admin.model.AdminArticle;

public class AdminJmsMessageCreator implements MessageCreator {

	private AdminArticle adminArticle;

	public AdminJmsMessageCreator(AdminArticle adminArticle) {
		super();
		this.adminArticle = adminArticle;
	}

	@Override
	public Message createMessage(Session session) throws JMSException {
		ObjectMessage message = session.createObjectMessage();
		message.setObject(adminArticle);
		return message;
	}

}
