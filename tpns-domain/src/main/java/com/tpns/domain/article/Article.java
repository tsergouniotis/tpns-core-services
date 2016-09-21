package com.tpns.domain.article;

import java.io.Serializable;
import java.time.Clock;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Article implements Serializable {

	private static final long serialVersionUID = 2595509613398948593L;

	private Long id;

	private String subject;

	private String author;

	private String shortDescription;

	private String content;

	private Category category;

	private ArticleStatus status;

	private List<MediaResource> resources = new ArrayList<MediaResource>();

	private Set<Keyword> keywords;

	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;

	private LocalDateTime postedAt;

	private Long version;

	private Set<Audit> audits;

	/**
	 * JPA constructor
	 */
	protected Article() {
		this.status = ArticleStatus.CREATED;
	}

	private Article(Long id, String subject, String content) {
		this();
		this.id = id;
		this.subject = subject;
		this.content = content;
	}

	public Long getId() {
		return id;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getShortDescription() {
		return shortDescription;
	}

	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}

	public List<MediaResource> getResources() {
		return resources;
	}

	public void setResources(List<MediaResource> resources) {
		this.resources = resources;
	}

	public Set<Keyword> getKeywords() {
		return keywords;
	}

	public void setKeywords(Set<Keyword> keywords) {
		this.keywords = keywords;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Category getCategory() {
		return category;
	}

	public ArticleStatus getStatus() {
		return status;
	}

	public void setStatus(ArticleStatus status) {
		this.status = status;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public LocalDateTime getPostedAt() {
		return postedAt;
	}

	public void setPostedAt(LocalDateTime postedAt) {
		this.postedAt = postedAt;
	}

	public Long getVersion() {
		return version;
	}

	public Set<Audit> getAudits() {
		if (null == audits) {
			this.audits = new HashSet<>();
		}
		return Collections.unmodifiableSet(audits);
	}

	public void audit() {
		if (null == audits) {
			this.audits = new HashSet<>();
		}

		Audit audit = Audit.create(author, status);
		this.audits.add(audit);
	}

	public void update(Article article) {
		this.status = article.getStatus();
		this.content = article.getContent();
		this.subject = article.getSubject();
		this.shortDescription = article.getShortDescription();
		this.category = article.getCategory();
		this.resources = article.getResources();
		this.updatedAt = LocalDateTime.now(Clock.systemUTC());
	}

	public static Article create(Long id, String title, String content) {
		return new Article(id, title, content);

	}

	public static Article create(String subject, String shortDescription, String content, Category category, String author, ArticleStatus status, LocalDateTime createdAt,
			LocalDateTime updatedAt, LocalDateTime postedAt, Set<String> destinations, List<MediaResource> mediaResources) {
		Article article = new Article();
		article.setSubject(subject);
		article.setShortDescription(shortDescription);
		article.setContent(content);
		article.setCategory(category);
		article.setAuthor(author);
		article.setStatus(status);
		article.setCreatedAt(createdAt);
		article.setUpdatedAt(updatedAt);
		article.setPostedAt(postedAt);
		article.setResources(mediaResources);
		return article;
	}

}
