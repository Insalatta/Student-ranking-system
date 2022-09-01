package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.repository.StaffRepo;
import com.bean.Staff;

@Controller
public class RegisterController {
	
	@Autowired
	StaffRepo staffRepo;
	
	@RequestMapping("/")
	public String Register() {
		return "front";
	}
	
	@GetMapping("register")
	public String register() {
		return "register";
	}
	@PostMapping("registerStaff")
	public String save(Staff staff) {
		staffRepo.save(staff);
		return "login";
	}

}
