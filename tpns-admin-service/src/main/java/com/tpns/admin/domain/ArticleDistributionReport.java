package com.tpns.admin.domain;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.UUID;

public class ArticleDistributionReport implements Serializable {

	private ArticleDistributionId id;

	private String status;

	private ZonedDateTime createdAt;

	/**
	 * JPA Constructor
	 */
	public ArticleDistributionReport() {
		super();
	}

	public ArticleDistributionReport(UUID uuid, String property, String status) {
		super();
		this.id = new ArticleDistributionId(uuid, property);
		this.status = status;
	}

	private ArticleDistributionId getId() {
		return id;
	}

	public void setId(ArticleDistributionId id) {
		this.id = id;
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
