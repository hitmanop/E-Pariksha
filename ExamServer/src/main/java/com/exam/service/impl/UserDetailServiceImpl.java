package com.exam.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.repositery.UserRepositery;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
	
	@Autowired
	private UserRepositery userrepositery;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	     User user= this.userrepositery.findByUsername(username);
	     if(user==null) {
	    	 throw new UsernameNotFoundException(username);
	     }
		return user;
	}

}
