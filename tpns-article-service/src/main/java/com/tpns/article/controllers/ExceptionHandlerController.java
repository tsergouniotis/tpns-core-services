package com.tpns.article.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.tpns.article.errors.InvalidArticleException;

@ControllerAdvice
public class ExceptionHandlerController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionHandlerController.class);

	@ExceptionHandler(value = { Exception.class, RuntimeException.class })
	@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Generic Server Error.Contact System Administrator.")
	public void defaultErrorHandler(HttpServletRequest request, Exception e) {

		LOGGER.error(e.getMessage(), e);

	}

	@ExceptionHandler(value = { InvalidArticleException.class })
	@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Invalid Article")
	public List<String> invalidArticleExceptionHandler(HttpServletRequest request, InvalidArticleException e) {

		LOGGER.error(e.getMessage(), e);

		return e.getErrors();

	}

}
