package com.tpns.admin.jms;

import java.util.Objects;
import java.util.UUID;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.tpns.admin.domain.ArticleDistributionReport;
import com.tpns.admin.domain.ArticleId;
import com.tpns.admin.repository.ArticleDistributionReportManager;
import com.tpns.admin.repository.ArticleDistributionReportRepository;
import com.tpns.admin.repository.ArticleIdRepository;
import com.tpns.domain.article.Article;

public class AdminQueueMessageListener implements MessageListener {

	private static final Logger LOGGER = LoggerFactory.getLogger(AdminQueueMessageListener.class);

	@Autowired
	private ArticleDistributionReportRepository articleDistributionReportRepository;

	@Autowired
	private ArticleDistributionReportManager articleDistributionReportManager;

	private String status;

	@Override
	public void onMessage(Message message) {
		if (message instanceof ObjectMessage) {
			try {

				ObjectMessage objectMessage = ObjectMessage.class.cast(message);
				Article article = Article.class.cast(objectMessage.getObject());

				LOGGER.info("Receive successful report from article : " + article.getHeadline());

				String destination = objectMessage.getStringProperty("destination");
				String guid = objectMessage.getStringProperty("guid");

				articleDistributionReportManager.manage(destination, guid, status);

			} catch (JMSException ex) {
				throw new RuntimeException(ex);
			}
		} else {
			throw new IllegalArgumentException("Message must be of type ObjectMessage");
		}
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
