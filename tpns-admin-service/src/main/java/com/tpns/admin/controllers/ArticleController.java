package com.tpns.admin.controllers;

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
import com.tpns.admin.model.AdminArticle;

@RestController
@RequestMapping("/v1/article")
public class ArticleController {

	@Autowired
	private JmsTemplate jmsTemplate;

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<AdminArticle> update(@Valid @RequestBody AdminArticle article) throws Exception {

		jmsTemplate.send(new AdminJmsMessageCreator(article));

		return new ResponseEntity<>(article, HttpStatus.OK);
	}

}
