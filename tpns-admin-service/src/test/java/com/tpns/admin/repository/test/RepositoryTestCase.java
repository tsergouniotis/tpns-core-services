package com.tpns.admin.repository.test;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.tpns.admin.Application;
import com.tpns.admin.domain.ArticleId;
import com.tpns.admin.repository.ArticleIdRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
public class RepositoryTestCase {

	@Autowired
	private ArticleIdRepository repository;

	@Before
	public void setup() {
		System.setProperty("ADMIN_DB_HOST", "localhost");
		System.setProperty("ADMIN_DB_PORT", "5434");
		System.setProperty("ADMIN_DB_USER", "tpns_admin_db");
		System.setProperty("ADMIN_DB_PASS", "tpns");
	}

	@Test
	public void testArticleIdRepository() {
		try {
			ArticleId articleId = repository.saveAndFlush(ArticleId.createTestArticleId());
			articleId = repository.findOne(articleId.getId());
			articleId = repository.findByGuid(articleId.getGuid());
			Assert.assertNotNull(articleId.getGuid());
		} catch (Exception e) {
			e.printStackTrace();
			Assert.fail(e.getMessage());
		}
	}

}
