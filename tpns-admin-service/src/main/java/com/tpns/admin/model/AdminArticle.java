package com.tpns.admin.model;

import java.util.ArrayList;
import java.util.List;

import com.tpns.domain.article.Article;

public class AdminArticle extends Article {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3213305958851609353L;

	private List<String> destinations;

	private String action;

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

	public Article copy() {
		return Article.create(getContent(), getCategories(), getAuthor(), getStatus(), getCreatedAt(), getUpdatedAt(), getPostedAt(), getResources());
	}

}
