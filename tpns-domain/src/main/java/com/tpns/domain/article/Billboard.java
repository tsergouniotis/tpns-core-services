package com.tpns.domain.article;

import java.io.Serializable;

public class Billboard implements Serializable {

	private Long articleId;

	private Article article;

	private ArticleInfo info;

	public Long getArticleId() {
		return articleId;
	}

	public void setArticleId(Long articleId) {
		this.articleId = articleId;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public ArticleInfo getInfo() {
		return info;
	}

	public void setInfo(ArticleInfo info) {
		this.info = info;
	}

}
