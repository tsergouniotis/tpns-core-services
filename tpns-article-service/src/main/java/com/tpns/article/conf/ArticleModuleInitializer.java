package com.tpns.article.conf;

import java.io.IOException;
import java.util.Properties;

import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.stereotype.Component;

@Component
public class ArticleModuleInitializer extends PropertyPlaceholderConfigurer {

	@Override
	protected void loadProperties(Properties props) throws IOException {

		super.loadProperties(props);
	}

}
