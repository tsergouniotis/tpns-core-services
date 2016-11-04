package com.tpns.admin.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tpns.admin.model.AdminArticle;
import com.tpns.admin.services.ArticleService;
import com.tpns.common.validation.errors.TpnsValidationException;
import com.tpns.domain.errors.GenericException;

@RestController
@RequestMapping("/v1/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<AdminArticle> update(@RequestBody AdminArticle article) throws Exception {

		try {
			articleService.save(article);
			return new ResponseEntity<>(article, HttpStatus.OK);
		} catch (TpnsValidationException e) {
			AdminArticle res = new AdminArticle();
			res.setErrors(e.getBusinessErrors());
			return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
		} catch (GenericException e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

}
