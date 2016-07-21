package com.tpns.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tpns.domain.user.User;
import com.tpns.user.repository.UserRepository;

@RestController
@RequestMapping("/v1/login")
public class LoginController {

	@Autowired
	private UserRepository userRepository;

	@RequestMapping(produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, method = RequestMethod.GET, value = "/find/{email:.+}")
	public ResponseEntity<User> find(@PathVariable("email") String email) {
		User user = userRepository.findByUsername(email);
		return HttpStatusUtils.response(user);
	}

}
