package com.tpns.admin.controllers;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tpns.admin.jms.AdminJmsMessageCreator;
import com.tpns.admin.jms.AdminJmsMessageCreator.AdminArticleAction;
import com.tpns.admin.model.AdminArticle;

@RestController
@RequestMapping("/v1/article")
public class ArticleController {

	@Autowired
	private JmsTemplate jmsTemplate;

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<AdminArticle> update(@Valid @RequestBody AdminArticle article) throws Exception {

		for (String destination : article.getDestinations()) {
			// TODO perform the action validation inside the validator
			AdminArticleAction action = AdminArticleAction.fromValue(article.getAction());
			jmsTemplate.send(new AdminJmsMessageCreator(article.copy(), destination, action));
		}

		return new ResponseEntity<>(article, HttpStatus.OK);

	}

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET)
	public ResponseEntity<AdminArticle> get() throws Exception {

		AdminArticle article = new AdminArticle();

		int items = 3;

		for (int i = 0; i < items; i++) {
			article.getDestinations().add(UUID.randomUUID().toString());
		}

		return new ResponseEntity<>(article, HttpStatus.OK);
	}

}
