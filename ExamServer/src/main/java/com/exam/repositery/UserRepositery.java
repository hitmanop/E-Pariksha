package com.exam.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.User;

public interface UserRepositery extends JpaRepository<User, Integer> {
	public User findByUsername(String username);
}
