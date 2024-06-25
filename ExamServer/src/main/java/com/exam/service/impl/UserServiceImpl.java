package com.exam.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.entity.UserRole;
import com.exam.repositery.RoleRepositery;
import com.exam.repositery.UserRepositery;
import com.exam.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepositery userRespositery;
	@Autowired
	private RoleRepositery roleRepositery;

	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {

		User localUser = this.userRespositery.findByUsername(user.getUsername());
		if (localUser != null) {
			throw new Exception("User Already Present");
		} else {
			for (UserRole ur : userRoles)
				roleRepositery.save(ur.getRole());

			user.getUserRoles().addAll(userRoles);
			localUser = userRespositery.save(user);
		}
		System.out.println(userRoles);
		return localUser;
	}

	@Override
	public User getUser(String username) {
		return userRespositery.findByUsername(username);
	}

	@Override
	public void deleteUser(long id) {
	 this.userRespositery.deleteById((int) id);
		
	}
 

}
