package com.tpns.domain.article;

import java.io.Serializable;

public class ArticleInfo implements Serializable {

	private String text;

	private String image;

	private ImageSettings settings;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public ImageSettings getSettings() {
		return settings;
	}

	public void setSettings(ImageSettings settings) {
		this.settings = settings;
	}

}
