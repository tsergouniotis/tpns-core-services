package com.tpns.domain.article;

public class ArticleInfoExtended extends ArticleInfo {

	private Article article;

	private Long articleId;

	public ArticleInfoExtended() {
		super();
	}

	public ArticleInfoExtended(ArticleInfo info) {
		super(info);
	}

	private Long getArticleId() {
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

}
