package com.tpns.admin.domain;

import java.io.Serializable;
import java.time.ZonedDateTime;

public class ArticleDistributionReport implements Serializable {

	private Long id;

	private ArticleId articleId;

	private String property;

	private String status;

	private ZonedDateTime createdAt;

	/**
	 * JPA Constructor
	 */
	public ArticleDistributionReport() {
		super();
	}

	public ArticleDistributionReport(ArticleId articleId, String property, String status) {
		super();
		this.articleId = articleId;
		this.property = property;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	private void setId(Long id) {
		this.id = id;
	}

	public ArticleId getArticleId() {
		return articleId;
	}

	public void setArticleId(ArticleId articleId) {
		this.articleId = articleId;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public ZonedDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(ZonedDateTime createdAt) {
		this.createdAt = createdAt;
	}

}
