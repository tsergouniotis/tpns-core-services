package com.tpns.article.repository.test;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.tpns.article.Application;
import com.tpns.article.repository.ArticleRepository;
import com.tpns.domain.article.Article;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
public class RepositoryTestCase {

	@Autowired
	@Qualifier("news24")
	private Parser news24;

	@Autowired
	private ArticleRepository repository;

	static {
		System.setProperty("ARTICLE_DB_HOST", "localhost");
		System.setProperty("ARTICLE_DB_PORT", "5432");
		System.setProperty("ARTICLE_DB_USER", "tpns_article_db");
		System.setProperty("ARTICLE_DB_PASS", "tpns");

		startContainer();
	}

	private static void startContainer() {
		try {
			TpnsDockerClientManager.getInstance().start();

			Thread.sleep(TimeUnit.SECONDS.toMillis(5));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@After
	public void stopContainer() {
		try {
			// TpnsDockerClientManager.getInstance().stop();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Test
	public void testNews24Parser() {

		try {
			List<Article> articles = new News24Parser().parse();

			repository.save(articles);

		} catch (Exception e) {
			Assert.fail(e.getMessage());
		}

	}

}
