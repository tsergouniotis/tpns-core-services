package com.tpns.admin.model;

import java.util.ArrayList;
import java.util.List;

import com.tpns.domain.article.Article;

public class AdminArticle extends Article {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3213305958851609353L;

	private String owner;

	private List<String> guests;

	private String action;

	private List<String> errors;

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public List<String> getGuests() {
		if (null == this.guests) {
			this.guests = new ArrayList<>();
		}
		return guests;
	}

	public void setGuests(List<String> destinations) {
		this.guests = destinations;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public List<String> getErrors() {
		return errors;
	}

	public void setErrors(List<String> errors) {
		this.errors = errors;
	}

	public Article vanilla() {
		// @formatter:off
		return Article.create(getGuid(), isOwner(), getContent(), getCategories(), getAuthor(), getStatus(), getCreatedAt(), getUpdatedAt(), getPostedAt(), getResources());
		// @formatter:on
	}

}
