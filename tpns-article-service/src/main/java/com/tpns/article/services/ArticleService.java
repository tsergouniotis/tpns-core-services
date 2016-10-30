package com.tpns.article.services;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import javax.validation.Valid;
import javax.validation.Validator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;

import com.tpns.article.errors.ArticleNotFoundException;
import com.tpns.article.errors.ArticleProcessingException;
import com.tpns.article.errors.InvalidArticleException;
import com.tpns.article.repository.ArticleRepository;
import com.tpns.common.validation.ValidationUtils;
import com.tpns.domain.article.Article;
import com.tpns.domain.article.ArticleStatus;

@Service
@Transactional
public class ArticleService {

	private static final Logger LOGGER = LoggerFactory.getLogger(ArticleService.class);

	@Autowired
	private ArticleRepository articleRepository;

	@Autowired
	private Validator validator;

	public Article save(Article article) throws ArticleProcessingException {

		try {

			Map<String, String> errors = ValidationUtils.invokeValidator(article, validator);

			if (!CollectionUtils.isEmpty(errors)) {
				throw new InvalidArticleException(errors);
			}

			return articleRepository.save(article);

		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e);
			throw new ArticleProcessingException();
		}
	}

	public List<Article> findAll() {
		return articleRepository.findAll();
	}

	public List<Article> findByStatus(ArticleStatus status) {
		return articleRepository.findByStatus(status);
	}

	public List<Article> findByCategoriesName(String catName) {
		return articleRepository.findByCategoriesName(catName);
	}

	public Article findOne(Long id) throws ArticleNotFoundException {
		Article article = articleRepository.findOne(id);
		if (Objects.isNull(article)) {
			throw new ArticleNotFoundException("No article with id " + id + " can be found.");
		}
		return article;
	}

	public void delete(Long id) {
		articleRepository.delete(id);
	}

}
