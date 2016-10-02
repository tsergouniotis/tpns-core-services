package com.tpns.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tpns.user.model.UserAttempts;

public interface UserAttemptRepository extends JpaRepository<UserAttempts, String> {

	UserAttempts findByUsername(String username);

	@Modifying
	@Query("update UserAttempts ua set ua.attempts = ?1, ua.lastmodified = now() where ua.username = ?2")
	void updateAttemptsByUsername(Integer attempts, String username);

}
