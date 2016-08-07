package com.tpns.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tpns.user.model.UserAttempts;

public interface UserAttemptsRepository extends JpaRepository<UserAttempts, Long> {

	UserAttempts findByUsername(String username);

}
