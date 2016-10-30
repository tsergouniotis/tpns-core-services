package com.tpns.admin.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.tpns.domain.article.Article;

public class AdminArticle extends Article {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3213305958851609353L;

	private List<String> destinations;

	private String action;

	private Map<String, String> errors;

	public List<String> getDestinations() {
		if (null == this.destinations) {
			this.destinations = new ArrayList<>();
		}
		return destinations;
	}

	public void setDestinations(List<String> destinations) {
		this.destinations = destinations;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public Map<String, String> getErrors() {
		return errors;
	}

	public void setErrors(Map<String, String> errors) {
		this.errors = errors;
	}

	public Article copy() {
		return Article.create(getGuid(), getContent(), getCategories(), getAuthor(), getStatus(), getCreatedAt(), getUpdatedAt(), getPostedAt(), getResources());
	}

}
