package com.tpns.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.tpns.domain.user.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);

	@Modifying
	@Query("update User u set u.accountNonLocked = ?1  where u.username = ?2")
	void updateUserLockUserByUsername(boolean accountNonLocked, String username);

}
