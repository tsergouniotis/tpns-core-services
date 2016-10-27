package com.tpns.article.controllers;

import java.util.Collections;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tpns.article.errors.ArticleNotFoundException;
import com.tpns.article.services.ArticleService;
import com.tpns.domain.article.Article;
import com.tpns.domain.article.ArticleStatus;

@RestController
@RequestMapping("/v1/article")
public class ArticleController {

	@Autowired
	private ArticleService articleService;

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET)
	public List<Article> findAll() throws Exception {
		return articleService.findAll();
	}

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, path = "/published")
	public List<Article> findPublished() throws Exception {
		return articleService.findByStatus(ArticleStatus.PUBLISHED);
	}

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, path = "/findPublishedByCategory")
	public List<Article> findPublished(@RequestParam("catName") @NotNull String catName) throws Exception {
		return articleService.findByCategoriesName(catName);
	}

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, path = "/{id}")
	public ResponseEntity<Article> find(@PathVariable("id") @NotNull Long id) {
		try {
			Article article = articleService.findOne(id);
			return new ResponseEntity<Article>(article, HttpStatus.OK);
		} catch (ArticleNotFoundException e) {
			return new ResponseEntity<Article>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, path = "/search/{key}")
	public ResponseEntity<List<Article>> seach(@PathVariable("key") String key) throws Exception {
		List<Article> articles = Collections.emptyList();
		// TODO call lucene repository if advanced search or search by keyword
		HttpStatus status = HttpStatus.OK;
		if (CollectionUtils.isEmpty(articles)) {
			status = HttpStatus.NOT_FOUND;
		}
		return new ResponseEntity<List<Article>>(articles, status);
	}

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<Article> save(@Valid @RequestBody Article article) throws Exception {
		articleService.save(article);
		return new ResponseEntity<Article>(article, HttpStatus.OK);
	}

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.PUT)
	public ResponseEntity<Article> update(@Valid @RequestBody Article article) throws Exception {
		// TODO create update method on repository level
		// articleRepository.update(article);
		return new ResponseEntity<Article>(article, HttpStatus.OK);
	}

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.DELETE, path = "/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) throws Exception {
		articleService.delete(id);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}
