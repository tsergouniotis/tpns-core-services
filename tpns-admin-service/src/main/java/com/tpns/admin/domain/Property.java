package com.tpns.admin.domain;

import java.io.Serializable;

public class Property implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 880141852887966953L;

	private Long id;

	private String propertyId;

	private String url;

	private String description;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(String propertyId) {
		this.propertyId = propertyId;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
