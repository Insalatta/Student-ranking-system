package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bean.Mark;
import com.bean.Student;
import com.repository.MarkRepo;
import com.repository.StudentRepo;

@RestController
@CrossOrigin

public class StudentController {
	
	@Autowired
	StudentRepo studentRepo;
	@Autowired
	MarkRepo markRepo;
	
	@PostMapping("/saveStudent")
	@ResponseBody
	public String saveStudent(@RequestBody Student student) {
		boolean isEmpty = studentRepo.findById(student.getSno()).isEmpty();
		if(isEmpty) {
			studentRepo.save(student);
			return "Student details successfully added!";
		}
		return "Student details already found";
	}
	
	@GetMapping("/viewStudents")
	@ResponseBody
	public List<Student> viewStudentDetails() {
		return studentRepo.findAll();
	}
	
	@GetMapping("/viewStudent")
	@ResponseBody
	public Optional<Student> viewStudent(Long id) {
		return studentRepo.findById(id);
	}
	@PostMapping("deleteStudent")
	public ModelAndView deleteStudent(Long adno) {
		ModelAndView mv = new ModelAndView();
		mv.addObject("msg", "Student record deleted successfully!");
		mv.addObject("color","green");
		mv.setViewName("delete");
		Student s = studentRepo.findById(adno).orElse(null);
		if(s == null) {
			mv.addObject("msg","Error! Student record not found");
			mv.addObject("color","red");
			return mv;
		}
		try {
			List<Mark> marks = s.getMarks();
			for(Mark m:marks) {
				markRepo.delete(m);
			}
			studentRepo.delete(s);
		}catch(Exception e){
			mv.addObject("msg","Error! Cannot be deleted");
			mv.addObject("color","red");
			return mv;
		}
		return mv;
	}
}
