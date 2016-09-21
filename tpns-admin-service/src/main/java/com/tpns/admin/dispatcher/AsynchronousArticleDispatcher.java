package com.tpns.admin.dispatcher;

import java.util.concurrent.Future;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;

import com.tpns.admin.model.AdminArticle;

@Async
public class AsynchronousArticleDispatcher extends AbstractDispatcher {

	private static Logger LOGGER = LoggerFactory.getLogger(AsynchronousArticleDispatcher.class.getPackage().getName());

	public Future<Boolean> dispatch(final AdminArticle article) {

		final boolean result = false;

		send(article);

		return new AsyncResult<Boolean>(result);

	}

}
