package com.tpns.user.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tpns.user.model.UserAttempts;
import com.tpns.user.repository.UserAttemptRepository;
import com.tpns.user.repository.UserRepository;

@Service("userLockingService")
@Transactional
public class UserLockingService {

	public final static int max_login_attempts = 3;
	public final static int lock_time_in_minutes = 20;

	@Autowired
	private UserAttemptRepository userAttemptRepository;

	@Autowired
	private UserRepository userRepository;

	public void handleFailedLoginAttempt(String username) {

		UserAttempts userAttempts = userAttemptRepository.findByUsername(username);

		if (userAttempts == null) {
			userAttempts = new UserAttempts(username);
		}
		userAttempts.increaseAttempts();
		userAttempts.setLastmodified(LocalDateTime.now());

		userAttemptRepository.save(userAttempts);

		// if user has more than three attempts lock him

		if (userAttempts.getAttempts() == max_login_attempts) {
			userRepository.updateUserLockUserByUsername(false, username);
		}

	}

	public void resetLoginAttempts(String username) {

		userAttemptRepository.updateAttemptsByUsername(0, username);

	}

}
