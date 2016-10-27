package com.tpns.article.conf;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.MutablePropertySources;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabase;

public class DbPlaceholderConfigurer extends PropertySourcesPlaceholderConfigurer {

	private static final Logger LOGGER = LoggerFactory.getLogger(DbPlaceholderConfigurer.class);

	private JdbcTemplate jdbcTemplate;

	public DbPlaceholderConfigurer(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
		Map<String, Object> loadedSettings = load();
		MutablePropertySources mutablePropertySources = new MutablePropertySources();
		mutablePropertySources.addFirst(new MapPropertySource("custom", loadedSettings));
		setPropertySources(mutablePropertySources);

	}

	private Map<String, Object> loadProperties(EmbeddedDatabase dataSource) {
		Map<String, Object> result = new HashMap<>();
		try (Connection connection = dataSource.getConnection();
				Statement stm = connection.createStatement();
				ResultSet rs = stm.executeQuery("select key,value from application_parameters")) {
			while (rs.next()) {
				result.put(rs.getString(1), rs.getString(2));
			}
		} catch (SQLException e) {
			LOGGER.error(e.getMessage(), e);
		}
		return result;
	}

	protected Map<String, Object> load() {
		Map<String, Object> result = new HashMap<>();
		try {
			jdbcTemplate.query("select key,value from application_parameters", new RowCallbackHandler() {

				@Override
				public void processRow(final ResultSet rs) throws SQLException {
					result.put(rs.getString(1), rs.getString(2));
				}

			});
		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e);
		}
		return result;
	}

}
