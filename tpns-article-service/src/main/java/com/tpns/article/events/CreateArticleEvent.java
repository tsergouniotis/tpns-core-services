package com.tpns.article.events;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import com.tpns.article.repository.ArticleRepository;

@Component
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class CreateArticleEvent extends AbstractEvent {

	@Autowired
	private ArticleRepository articleRepository;

	@Override
	public Object fire() {
		return null;
	}

}
