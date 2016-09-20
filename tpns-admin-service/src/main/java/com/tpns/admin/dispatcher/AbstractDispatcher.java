package com.tpns.admin.dispatcher;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.util.CollectionUtils;

import com.tpns.admin.domain.Property;
import com.tpns.admin.model.AdminArticle;
import com.tpns.admin.repository.PropertyRepository;
import com.tpns.domain.article.Article;

public abstract class AbstractDispatcher {

	private static final Logger LOGGER = LoggerFactory.getLogger(AbstractDispatcher.class);

	@Autowired
	private PropertyRepository propertyRepository;

	@Autowired
	private OAuth2RestTemplate articleRestTemplate;

	public void send(final AdminArticle article) {
		final List<String> destinations = new ArrayList<String>(article.getDestinations());

		if (!CollectionUtils.isEmpty(destinations)) {

			final List<Property> applications = propertyRepository.findByPropertyIds(destinations);
			Optional.ofNullable(applications).orElse(Collections.emptyList()).forEach(app -> send(article, app.getUrl()));

		}
	}

	private void send(final Article article, final String destination) {

		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

		HttpEntity<Article> entity = new HttpEntity<Article>(article, headers);

		ResponseEntity<String> result = articleRestTemplate.exchange(destination, HttpMethod.PUT, entity, String.class);

		if (!HttpStatus.ACCEPTED.equals(result.getStatusCode())) {
			final StringBuilder builder = new StringBuilder("Article did not submitted successfully to : ").append(destination).append(". Status : ")
					.append(result.getStatusCode()).append(":").append(result.getBody());
			LOGGER.warn(builder.toString());
		}

	}

}
