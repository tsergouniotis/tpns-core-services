package com.tpns.article.services.security;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.codec.Base64;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.exceptions.InvalidTokenException;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.util.Assert;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.DefaultResponseErrorHandler;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

public class JWTRemoteTokenServices implements ResourceServerTokenServices {

	private final static String tokenParameterName = "token";

	private final static Logger log = LoggerFactory.getLogger(JWTRemoteTokenServices.class);

	private RestOperations restTemplate;

	private String checkTokenEndpointUrl;

	private String clientSecret;

	private JwtAccessTokenConverter tokenConverter;

	public JWTRemoteTokenServices() {
		restTemplate = new RestTemplate();
		((RestTemplate) restTemplate).setErrorHandler(new DefaultResponseErrorHandler() {
			@Override
			// Ignore 400
			public void handleError(ClientHttpResponse response) throws IOException {
				if (response.getRawStatusCode() != 400) {
					super.handleError(response);
				}
			}
		});
	}

	public void setRestTemplate(RestOperations restTemplate) {
		this.restTemplate = restTemplate;
	}

	public void setCheckTokenEndpointUrl(String checkTokenEndpointUrl) {
		this.checkTokenEndpointUrl = checkTokenEndpointUrl;
	}

	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}

	public void setAccessTokenConverter(JwtAccessTokenConverter accessTokenConverter) {
		this.tokenConverter = accessTokenConverter;
	}

	@Override
	public OAuth2Authentication loadAuthentication(String accessToken) throws AuthenticationException, InvalidTokenException {

		String clientId = "front-end-app";

		Map<String, Object> map = postForMap(checkTokenEndpointUrl, clientId, accessToken);

		if (map.containsKey("error")) {
			throw new InvalidTokenException(accessToken);
		}
		Assert.state(map.containsKey("client_id"), "Client id must be present in response from auth server");

		return tokenConverter.extractAuthentication(map);
	}

	@Override
	public OAuth2AccessToken readAccessToken(String accessToken) {
		throw new UnsupportedOperationException("Not supported: read access token");
	}

	private String getAuthorizationHeader(String clientId, String clientSecret) {
		String creds = String.format("%s:%s", clientId, clientSecret);
		try {
			return "Basic " + new String(Base64.encode(creds.getBytes("UTF-8")));
		} catch (UnsupportedEncodingException e) {
			throw new IllegalStateException("Could not convert String");
		}
	}

	private Map<String, Object> postForMap(String path, String clientId, String accessToken) {

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		headers.set("Authorization", getAuthorizationHeader(clientId, clientSecret));

		UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(path).queryParam(tokenParameterName, accessToken);
		String url = builder.build().toUriString();

		@SuppressWarnings({ "rawtypes", "unchecked" })
		Map<String, Object> map = restTemplate.exchange(url, HttpMethod.POST, new HttpEntity<MultiValueMap<String, String>>(null, headers), Map.class).getBody();

		return map;
	}

}
