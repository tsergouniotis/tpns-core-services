package com.tpns.article.conf;

import java.io.IOException;
import java.util.Properties;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.EnvironmentAware;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class ArticleModuleInitializer extends PropertyPlaceholderConfigurer implements EnvironmentAware, InitializingBean {

	private Environment environment;

	@Override
	protected void loadProperties(Properties props) throws IOException {

		super.loadProperties(props);
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void setEnvironment(Environment environment) {
		this.environment = environment;

	}

}
