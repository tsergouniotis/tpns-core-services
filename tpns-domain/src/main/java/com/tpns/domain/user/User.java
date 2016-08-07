package com.tpns.domain.user;

import java.io.Serializable;
import java.util.Collection;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@XmlRootElement(name = "user", namespace = "{urn:com.tpns}")
public class User implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String username;

	private String password;
	
	private Boolean enabled;
	
	private Boolean accountNonExpired;
	
	private Boolean accountNonLocked;

	private Profile profile;
	
	private Collection<Role> roles;

	@XmlTransient
	public Long getId() {
		return id;
	}

	@XmlElement(name = "username")
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}		

	@XmlTransient
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}		
	
	@XmlElement(name = "profile")
	public Profile getProfile() {
		return profile;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

	@XmlElement
	public Collection<Role> getRoles() {
		return roles;
	}

	public void setRoles(Collection<Role> roles) {
		this.roles = roles;
	}

	@XmlElement
	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	@XmlElement
	public Boolean getAccountNonExpired() {
		return accountNonExpired;
	}

	public void setAccountNonExpired(Boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}

	@XmlElement
	public Boolean getAccountNonLocked() {
		return accountNonLocked;
	}

	public void setAccountNonLocked(Boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	public void update(User user) {		
		this.username = user.getUsername();
		this.password = user.getPassword();
		this.enabled = user.getEnabled();		
		this.accountNonExpired=user.getAccountNonExpired();		
		this.accountNonLocked = user.getAccountNonLocked();
	}

	public boolean hasRole(Role theRole) {
		for (Role role : roles) {
			if (role.equals(theRole))
				return true;
		}
		return false;
	}

}
