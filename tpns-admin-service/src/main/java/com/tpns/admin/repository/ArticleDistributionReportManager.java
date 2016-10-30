package com.tpns.admin.repository;

import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tpns.admin.domain.ArticleDistributionReport;
import com.tpns.admin.domain.ArticleId;

@Transactional
@Service
public class ArticleDistributionReportManager {

	@Autowired
	private ArticleIdRepository articleIdRepository;

	@Autowired
	private ArticleDistributionReportRepository articleDistributionReportRepository;

	public void manage(String destination, String guid, String status) {

		ArticleId id = articleIdRepository.findByGuid(UUID.fromString(guid));
		if (Objects.isNull(id)) {
			throw new RuntimeException("There is no message with guid " + guid);
		}

		ArticleDistributionReport report = new ArticleDistributionReport(id, destination, status);
		articleDistributionReportRepository.save(report);

	}

}
