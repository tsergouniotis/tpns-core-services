package com.tpns.user.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;

/**
 * Reference org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl
 *
 */
public class CustomUserDetailsService extends JdbcDaoImpl {

	// override to get accountNonLocked
	@Override
	public List<UserDetails> loadUsersByUsername(String username) {
		return getJdbcTemplate().query(super.getUsersByUsernameQuery(), new String[] { username }, new RowMapper<UserDetails>() {
			public UserDetails mapRow(ResultSet rs, int rowNum) throws SQLException {
				String username = rs.getString("username");
				String password = rs.getString("password");
				boolean enabled = rs.getBoolean("enabled");
				boolean accountNonExpired = rs.getBoolean("accountnonexpired");
				boolean accountNonLocked = rs.getBoolean("accountnonlocked");
				boolean credentialsNonExpired = rs.getBoolean("credentialsnonexpired");

				return new User(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, AuthorityUtils.NO_AUTHORITIES);
			}

		});
	}

	// override to pass accountNonLocked
	@Override
	public UserDetails createUserDetails(String username, UserDetails userFromUserQuery, List<GrantedAuthority> combinedAuthorities) {
		String returnUsername = userFromUserQuery.getUsername();

		if (super.isUsernameBasedPrimaryKey()) {
			returnUsername = username;
		}

		return new User(returnUsername, userFromUserQuery.getPassword(), userFromUserQuery.isEnabled(), userFromUserQuery.isAccountNonExpired(),
				userFromUserQuery.isCredentialsNonExpired(), userFromUserQuery.isAccountNonLocked(), combinedAuthorities);
	}

}