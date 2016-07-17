package com.tpns.user.services;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import com.tpns.domain.user.User;
import com.tpns.user.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public void save(@Valid User User) {
		userRepository.save(User);
	}

	public User find(Long id) {
		return userRepository.findOne(id);
	}

	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	public void delete(Long id) {
		User user = userRepository.findOne(id);
		Assert.notNull(user);
		userRepository.delete(user);
	}

	public void update(@Valid User user) {
		User persistent = userRepository.findOne(user.getId());
		Assert.notNull(persistent);
		persistent.update(user);
	}

}
