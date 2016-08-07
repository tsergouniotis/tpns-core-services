package com.tpns.user.dao;

import com.tpns.user.model.UserAttempts;

public interface UserDetailsDao {

	void updateFailAttempts(String username);

	void resetFailAttempts(String username);

	UserAttempts getUserAttempts(String username);

}
