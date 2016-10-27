package com.tpns.article.errors;

import java.util.Map;

public class InvalidArticleException extends ArticleProcessingException {

	public InvalidArticleException(Map<String, String> errors) {
		super(errors.toString());
	}

}
