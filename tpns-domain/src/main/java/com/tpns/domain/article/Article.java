package com.tpns.domain.article;

import java.io.Serializable;
import java.time.Clock;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

public class Article implements Serializable {

	private static final long serialVersionUID = 2595509613398948593L;

	private Long id;

	private String guid;

	private String author;

	private ArticleInfo kicker;

	private String headline;

	private String subHead;

	private Lead lead;

	private String content;

	private Billboard billboard;

	private ArticleInfo nutshell;

	private Set<Category> categories;

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

	private Article(Long id, String content) {
		this.id = id;
		this.content = content;
	}

	public Long getId() {
		return id;
	}

	public String getGuid() {
		return guid;
	}

	public void setGuid(String guid) {
		this.guid = guid;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public ArticleInfo getKicker() {
		return kicker;
	}

	public void setKicker(ArticleInfo kicker) {
		this.kicker = kicker;
	}

	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String headline) {
		this.headline = headline;
	}

	public String getSubHead() {
		return subHead;
	}

	public void setSubHead(String subHead) {
		this.subHead = subHead;
	}

	public Lead getLead() {
		return lead;
	}

	public void setLead(Lead lead) {
		this.lead = lead;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Billboard getBillboard() {
		return billboard;
	}

	public void setBillboard(Billboard billboard) {
		this.billboard = billboard;
	}

	public ArticleInfo getNutshell() {
		return nutshell;
	}

	public void setNutshell(ArticleInfo nutshell) {
		this.nutshell = nutshell;
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

	public Set<Category> getCategories() {
		if (null == this.categories) {
			this.categories = new HashSet<>();
		}
		return Collections.unmodifiableSet(categories);
	}

	public void cleanCategories() {
		if (Objects.nonNull(this.categories)) {
			this.categories.clear();
		}
	}

	public void setCategories(Set<Category> categories) {
		this.categories = categories;
	}

	public boolean add(Category c) {
		if (null == this.categories) {
			this.categories = new HashSet<>();
		}
		return categories.add(c);
	}

	public void addAll(Collection<Category> categories) {
		this.categories.addAll(categories);
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
		this.categories = article.getCategories();
		this.resources = article.getResources();
		this.updatedAt = LocalDateTime.now(Clock.systemUTC());
	}

	public static Article create(Long id, String title, String content) {
		return new Article(id, content);
	}

	public static Article create(String guid, String content, Set<Category> categories, String author, ArticleStatus status, LocalDateTime createdAt, LocalDateTime updatedAt,
			LocalDateTime postedAt, List<MediaResource> mediaResources) {
		Article article = new Article();
		article.setGuid(guid);
		article.setContent(content);
		article.setCategories(categories);
		article.setAuthor(author);
		article.setStatus(status);
		article.setCreatedAt(createdAt);
		article.setUpdatedAt(updatedAt);
		article.setPostedAt(postedAt);
		article.setResources(mediaResources);
		return article;
	}

}
