package com.exam.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.Role;

public interface RoleRepositery extends JpaRepository<Role, Integer> {

}
