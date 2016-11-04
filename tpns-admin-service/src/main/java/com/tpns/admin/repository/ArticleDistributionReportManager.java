package com.tpns.admin.repository;

import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tpns.admin.domain.ArticleDistributionReport;
import com.tpns.domain.article.Article;

@Transactional
@Service
public class ArticleDistributionReportManager {

	@Autowired
	private ArticleRepository articleRepository;

	@Autowired
	private ArticleDistributionReportRepository articleDistributionReportRepository;

	public void manage(String destination, UUID guid, String status) {

		Article id = articleRepository.findByGuid(guid);
		if (Objects.isNull(id)) {
			throw new RuntimeException("There is no message with guid " + guid);
		}

		ArticleDistributionReport report = new ArticleDistributionReport(guid, destination, status);
		articleDistributionReportRepository.save(report);

	}

}
