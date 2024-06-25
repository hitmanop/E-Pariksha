package com.exam.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
@Entity
@Table(name = "role")
public class Role {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long roleId;
private String role;


@OneToMany (cascade= CascadeType.ALL,fetch=FetchType.EAGER, mappedBy= "role")
private Set<UserRole> userRoles=new HashSet<>();

public Role() {
	super();
}

public long getRoleId() {
	return roleId;
}
public void setRoleId(long roleId) {
	this.roleId = roleId;
}
public String getRole() {
	return role;
}
public void setRole(String role) {
	this.role = role;
}
public Set<UserRole> getUserRoles() {
	return userRoles;
}
public void setUserRoles(Set<UserRole> userRoles) {
	this.userRoles = userRoles;
}


	
}
