package com.tpns.user.model;

import java.util.Date;

public class UserAttempts {

	private String username;

	private int attempts;

	private Date lastmodified;

	public UserAttempts() {

	}

	public UserAttempts(String username) {
		super();
		this.username = username;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getAttempts() {
		return attempts;
	}

	public void setAttempts(int attempts) {
		this.attempts = attempts;
	}

	public Date getLastmodified() {
		return lastmodified;
	}

	public void setLastmodified(Date lastmodified) {
		this.lastmodified = lastmodified;
	}

	public void increaseAttempts() {
		attempts++;
	}

	@Override
	public String toString() {
		return "UserAttempts [username=" + username + ", attempts=" + attempts + ", lastmodified=" + lastmodified + "]";
	}

}
