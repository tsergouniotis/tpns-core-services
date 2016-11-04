package com.tpns.admin.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tpns.domain.article.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

	Article findByGuid(UUID guid);

}
