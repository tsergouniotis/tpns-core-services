package com.tpns.user.web.handler;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

import com.tpns.error.UserLoginErrorCode;
import com.tpns.user.service.UserLockingService;

public class LimitLoginAuthenticationProvider extends DaoAuthenticationProvider {

	@Autowired
	private UserLockingService userLockingService;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {

		String username = authentication.getName();

		try {

			Authentication auth = super.authenticate(authentication);

			// if reach here, means login success, else an exception will be
			// thrown
			// reset the user_attempts

			userLockingService.resetLoginAttempts(username);

			return auth;

		} catch (BadCredentialsException e) {

			System.out.println("Handling bad credentials");
			// invalid login, update to user_attempts
			userLockingService.handleFailedLoginAttempt(username);

			throw e;

		} catch (LockedException e) {

			// this user is locked!

			throw new LockedException(UserLoginErrorCode.USER_LOCKED.toString());

		} catch (Exception e) {
			System.out.println("some other exception  " + e.getClass().getName());
			throw e;
		}
	}

}