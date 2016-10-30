package com.tpns.jms.utils;

import javax.jms.Message;
import javax.jms.MessageListener;

import org.springframework.beans.factory.annotation.Autowired;

public class TpnsJmsMessageListener implements MessageListener {

	@Autowired
	private TpnsJmsMessageProcessor tpnsJmsMessageProcessor;

	@Override
	public void onMessage(Message message) {
		// TODO Auto-generated method stub

	}

}
