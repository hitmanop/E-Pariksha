package com.exam.controller;

import java.util.HashSet;
import java.util.Set;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import com.exam.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserService userservice;
	@PostMapping("/create")
	public User createuser(@RequestBody User user) throws Exception {

		Set<UserRole> userRole = new HashSet<UserRole>();
		Role role = new Role();
		role.setRoleId(1);
		role.setRole("ADMIN");
		String encodedPassword = hashPassword(user.getPassword());
        user.setPassword(encodedPassword);
		UserRole userrole = new UserRole();
		userrole.setRole(role);
		userrole.setUser(user);
		userRole.add(userrole);
		return this.userservice.createUser(user, userRole);
	}

	@GetMapping("/{username}")
	public User getuser(@PathVariable("username") String username) {
		return userservice.getUser(username);

	}
	@DeleteMapping("/{userId}")
	public void deleteuser(@PathVariable("userId") long id) {
		userservice.deleteUser(id);
	}
	private String hashPassword(String plainTextPassword){
		return BCrypt.hashpw(plainTextPassword, BCrypt.gensalt());
	}
}
