package com.tpns.article.errors;

import java.util.Map;

public class InvalidArticleException extends ArticleProcessingException {

	private Map<String, String> errors;

	public InvalidArticleException(Map<String, String> errors) {
		super("Invalid Article");
		this.errors = errors;
	}

	public Map<String, String> getErrors() {
		return errors;
	}

}
