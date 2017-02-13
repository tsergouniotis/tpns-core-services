package com.tpns.domain.article;

import java.io.Serializable;

public class ArticleInfo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String text;

	private String image;

	private ImageSettings settings;

	protected ArticleInfo() {

	}

	protected ArticleInfo(ArticleInfo info) {
		setImage(info.getImage());
		setSettings(info.getSettings());
		setText(info.getText());
	}

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
