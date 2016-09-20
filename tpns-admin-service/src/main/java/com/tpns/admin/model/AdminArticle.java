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

	public List<String> getDestinations() {
		if (null == this.destinations) {
			this.destinations = new ArrayList<>();
		}
		return destinations;
	}

	public void setDestinations(List<String> destinations) {
		this.destinations = destinations;
	}

}
