package com.tpns.user.model;

import java.util.Date;

public class UserAttempts {
	
	private Long id;
	
	private String username;
	
	private int attempts;
	
	private Date lastModified;
	
	public UserAttempts(){
		
	}

	public Long getId() {
		return id;
	}	

	public void setId(Long id) {
		this.id = id;
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

	public Date getLastModified() {
		return lastModified;
	}

	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
	}	
	
}
