package com.tpns.user.language.filters;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class CORSFilter extends OncePerRequestFilter {

	private static final Logger LOGGER = LoggerFactory.getLogger(CORSFilter.class);

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		response.addHeader("Access-Control-Allow-Origin", "*");

		LOGGER.debug("Received Request");
		LOGGER.debug("Method: " + request.getMethod());
		Enumeration headerNames = request.getHeaderNames();
		while (headerNames.hasMoreElements()) {
			String headerName = (String) headerNames.nextElement();
			LOGGER.debug("Header Name - " + headerName + ", Value - " + request.getHeader(headerName));
		}
		Enumeration params = request.getParameterNames();
		while (params.hasMoreElements()) {
			String paramName = (String) params.nextElement();
			LOGGER.debug("Parameter Name - " + paramName + ", Value - " + request.getParameter(paramName));
		}

		if (isPreFlightRequest(request)) {
			LOGGER.trace("Sending Header....");
			// CORS "pre-flight" request
			response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
			// response.addHeader("Access-Control-Allow-Headers",
			// "Authorization");
			response.addHeader("Access-Control-Allow-Headers", "Content-Type, Application, Origin, Host, Referrer, Accept, Accept-Language, Content-Language ");
			response.addHeader("Access-Control-Max-Age", "1");
		}

		filterChain.doFilter(request, response);
	}

	private boolean isPreFlightRequest(HttpServletRequest request) {
		return request.getHeader("Access-Control-Request-Method") != null && "OPTIONS".equals(request.getMethod());
	}

}
