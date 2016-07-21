package com.tpns.user.controllers;

import java.util.Objects;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tpns.domain.user.User;
import com.tpns.user.repository.UserRepository;

@RestController
@RequestMapping("/v1/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, value = "/find/{username:.+}")
	public ResponseEntity<User> find(@PathVariable("username") String username) {
		User user = userRepository.findByUsername(username);
		return HttpStatusUtils.response(user);
	}

	@PreAuthorize("#oauth2.hasScope('read')")
	@Secured("ROLE_ADMIN")
	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, value = "/{id}")
	public ResponseEntity<User> find(@PathVariable("id") Long id) throws Exception {
		User user = userRepository.findOne(id);
		return HttpStatusUtils.response(user);
	}

	@PreAuthorize("#oauth2.hasScope('write')")
	@Secured("ROLE_ADMIN")
	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<User> save(@Valid User user) throws Exception {
		User saved = userRepository.save(user);
		return HttpStatusUtils.response(saved);
	}

	@RequestMapping(consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.PUT)
	public ResponseEntity<User> update(@Valid User user) throws Exception {
		User persistent = userRepository.findOne(user.getId());
		if (Objects.isNull(persistent)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		persistent.update(user);
		persistent = userRepository.save(persistent);
		return new ResponseEntity<>(persistent, HttpStatus.OK);
	}

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.DELETE, path = "/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) throws Exception {
		User persistent = userRepository.findOne(id);
		if (Objects.isNull(persistent)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		userRepository.delete(persistent);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}
