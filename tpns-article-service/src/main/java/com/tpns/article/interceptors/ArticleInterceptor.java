package com.tpns.article.interceptors;

import java.time.Duration;
import java.time.Instant;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.tpns.common.validation.errors.TpnsValidationException;
import com.tpns.domain.errors.GenericException;

@Aspect
@Component
public class ArticleInterceptor {

	private static final Logger LOGGER = LoggerFactory.getLogger(ArticleInterceptor.class);

	@Around("execution(* com.tpns.article.services.*.*(..))")
	public Object proceed(ProceedingJoinPoint jp) throws Exception {

		try {
			Instant start = Instant.now();

			Object result = jp.proceed(jp.getArgs());

			Instant end = Instant.now();

			LOGGER.debug(jp.getSignature().toString() + "\t" + Duration.between(start, end).toString());

			return result;

		} catch (final TpnsValidationException e) {
			throw e;
		} catch (final Throwable e) {
			throw new GenericException(e);
		}

	}

}