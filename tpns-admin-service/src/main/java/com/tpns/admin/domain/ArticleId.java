package com.tpns.admin.domain;

import java.io.Serializable;
import java.util.UUID;

public class ArticleId implements Serializable {

	private Long id;

	private UUID guid;

	private void setId(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	/**
	 * Used by JPA
	 * 
	 * @param guid
	 */
	private void setGuid(UUID guid) {
		this.guid = guid;
	}

	public UUID getGuid() {
		return guid;
	}

	public String getGuidStr() {
		if (null != guid) {
			return guid.toString();
		}

		return null;
	}

	public static ArticleId createTestArticleId() {
		return new ArticleId();
	}

}
