package com.tpns.article.interceptors;

import java.time.Duration;
import java.time.Instant;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

//@Aspect
//@Component
public class RepositoryInterceptor {

	private static final String TAB = "\t";

	private static final Logger LOGGER = LoggerFactory.getLogger(RepositoryInterceptor.class);

	private static final long THREASHOLD = 1000;

	@Around("execution(* com.tpns.article.repository.*.*(..))")
	public Object proceed(ProceedingJoinPoint jp) throws Exception {

		try {
			Instant start = Instant.now();

			Object result = jp.proceed(jp.getArgs());

			Instant end = Instant.now();

			Duration duration = Duration.between(start, end);
			if (duration.toMillis() > THREASHOLD) {
				Signature signature = jp.getSignature();
				StringBuilder builder = new StringBuilder(signature.getDeclaringTypeName()).append(".").append(signature.getName()).append(TAB).append(duration.toString());
				LOGGER.warn(builder.toString());
			}

			return result;
		} catch (Throwable e) {
			LOGGER.error("An error occurred before calling the repository.", e);
			throw new Exception(e);
		}

	}

}