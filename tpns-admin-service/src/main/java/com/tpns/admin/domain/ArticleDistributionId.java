package com.tpns.admin.domain;

import java.io.Serializable;
import java.util.UUID;

public class ArticleDistributionId implements Serializable {

	private UUID articleGuid;

	private String destination;

	/**
	 * JPA default constructor
	 */
	protected ArticleDistributionId() {
		super();
	}

	public ArticleDistributionId(UUID articleGuid, String property) {
		super();
		this.articleGuid = articleGuid;
		this.destination = property;
	}

	public UUID getArticleGuid() {
		return articleGuid;
	}

	public void setArticleGuid(UUID articleGuid) {
		this.articleGuid = articleGuid;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

}
