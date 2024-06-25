package com.exam.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.exam.config.JwtUtil;
import com.exam.entity.JwtRequest;
import com.exam.entity.JwtResponse;
import com.exam.entity.User;
import com.exam.service.impl.UserDetailServiceImpl;

@RestController
@CrossOrigin("http://localhost:4200")
public class SecurityController {
	@Autowired
	private UserDetailServiceImpl userDetailService;

	@Autowired
	private AuthenticationManager manager;

	@Autowired
	private JwtUtil jwtUtil;

	private void authenticate(String username, String password) {
		try {
			manager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (Exception e) {
			System.out.println("Catch Block");
			throw new BadCredentialsException(" Invalid Username or Password  !!" + e);
		}
	}

	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		try {
		
			this.authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
		} catch (Exception e) {
			throw new Exception("User not found " + e);
		}
		UserDetails userDetails = this.userDetailService.loadUserByUsername(jwtRequest.getUsername());
		String string = this.jwtUtil.generateToken(userDetails.getUsername());

		return ResponseEntity.ok(new JwtResponse(string));
	}
    @GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		return (User) userDetailService.loadUserByUsername(principal.getName());
	}

}
