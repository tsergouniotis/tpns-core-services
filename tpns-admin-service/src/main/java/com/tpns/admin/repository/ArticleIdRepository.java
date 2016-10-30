package com.tpns.admin.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tpns.admin.domain.ArticleId;

public interface ArticleIdRepository extends JpaRepository<ArticleId, Long> {

	ArticleId findByGuid(UUID guid);

}
