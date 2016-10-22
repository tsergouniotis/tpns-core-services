package com.tpns.admin.jms;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.tpns.admin.dispatcher.SynchronousArticleDispatcher;
import com.tpns.admin.model.AdminArticle;

public class AdminMessageListener implements MessageListener {

	@Autowired
	private SynchronousArticleDispatcher articleDispatcher;

	private static final Logger LOGGER = LoggerFactory.getLogger(AdminMessageListener.class);

	@Override
	public void onMessage(Message message) {
		if (message instanceof ObjectMessage) {
			try {
				ObjectMessage objectMessage = ObjectMessage.class.cast(message);
				AdminArticle article = AdminArticle.class.cast(objectMessage.getObject());
				LOGGER.info(article.getHeadline());

				articleDispatcher.send(article);
			} catch (JMSException ex) {
				throw new RuntimeException(ex);
			}
		} else {
			throw new IllegalArgumentException("Message must be of type ObjectMessage");
		}
	}

}
