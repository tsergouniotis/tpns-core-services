package com.tpns.domain.user;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlTransient;

import com.tpns.domain.user.ContactInfo;

public class Profile implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String firstname;

	private String surname;

	private ContactInfo contact;

	public Profile() {

	}

	@XmlTransient
	public Long getId() {
		return id;
	}

	@XmlElement(name = "name")
	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	@XmlElement(name = "surname")
	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public ContactInfo getContact() {
		return contact;
	}

	public void setContact(ContactInfo contact) {
		this.contact = contact;
	}

	public void update(Profile profile) {
		this.firstname = profile.getFirstname();
		this.surname = profile.getSurname();
	}
}
