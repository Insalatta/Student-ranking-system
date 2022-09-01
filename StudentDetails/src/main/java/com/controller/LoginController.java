package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.bean.Staff;
import com.repository.StaffRepo;

@Controller
public class LoginController {
	
	@Autowired
	StaffRepo staffRepo;
	
	@GetMapping("login")
	public String login() {
		return "login";
	}
	
	@PostMapping("validateLogin")
	public ModelAndView welcome(String email,String pass) {
		Staff staff = staffRepo.findById(email).orElse(null);
		ModelAndView mv = new ModelAndView();
		mv.addObject("error","Incorrect email id or password!");
		mv.setViewName("login");
		if(staff == null || !pass.equals(staff.getPass())) {
			return mv;
		}
		mv.addObject("name",staff.getName());
		mv.setViewName("welcome");
		return mv;
	}
}
