package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.service.UserService;

@RestController
@CrossOrigin("*")
public class AuthenticationController {
	@Autowired
	private UserService userService;

	 @PostMapping("/validate-user")
	 public String checkUserSignInDetails(@RequestBody User user) {
	     return this.userService.checkSignInDetails(user);
	 }

	 @PostMapping("/check-user")
	 public boolean checkUserExistsWithEmail(@RequestBody  String email) {
		 return this.userService.checkUserByEmail(email);
	 }


}
