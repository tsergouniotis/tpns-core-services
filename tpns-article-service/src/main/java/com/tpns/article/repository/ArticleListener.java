package com.tpns.article.repository;

import java.time.Clock;
import java.time.LocalDateTime;

import com.tpns.domain.article.Article;

public class ArticleListener {

	public void prePersist(final Article entity) {
		entity.audit();
	}

	public void preUpdate(final Article entity) {
		entity.setUpdatedAt(LocalDateTime.now(Clock.systemUTC()));
	}

}
