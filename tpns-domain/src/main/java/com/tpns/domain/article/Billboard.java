package com.tpns.domain.article;

import java.io.Serializable;

public class Billboard implements Serializable {

	private Long articleId;

	private Article article;

	private ArticleInfo info;

	/**
	 * JPA constructor
	 */
	protected Billboard() {
		this.info = new ArticleInfo();
	}

	public ArticleInfo getInfo() {
		return info;
	}

	public void setInfo(ArticleInfo info) {
		this.info = info;
	}
	
	
	public Long articleId(){
		return articleId;
	}
	
	public Article article(){
		return article;
	}

	// @formatter:off
	// END OF REAL CLASS DEFINITION
	// @formatter:on

	/**
	 * Once again the following 6 methods are a JPA workaround because cannot
	 * have the attribute-override playing on nested embeddables
	 */
	public String getText() {
		if (null != info) {
			return info.getText();
		}
		return null;
	}

	/**
	 * nested embeddable attribute-override workaround
	 * 
	 * @param text
	 */
	public void setText(String text) {
		if (null != info) {
			info.setText(text);
		}
	}

	/**
	 * nested embeddable attribute-override workaround
	 * 
	 * @return
	 */
	public String getImage() {
		if (null != info) {
			return info.getImage();
		}
		return null;
	}

	/**
	 * nested embeddable attribute-override workaround
	 * 
	 * @param image
	 */
	public void setImage(String image) {
		if (null != info) {
			info.setImage(image);
		}
	}

	/**
	 * nested embeddable attribute-override workaround
	 * 
	 * @return
	 */
	public ImageSettings getSettings() {
		if (null != info) {
			return info.getSettings();
		}
		return null;
	}

	/**
	 * nested embeddable attribute-override workaround
	 * 
	 * @param settings
	 */
	public void setSettings(ImageSettings settings) {
		if (null != info) {
			info.setSettings(settings);
		}
	}

}
