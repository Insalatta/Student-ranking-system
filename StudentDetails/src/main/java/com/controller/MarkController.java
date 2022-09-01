package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.bean.Mark;
import com.bean.Student;
import com.repository.MarkRepo;
import com.repository.StudentRepo;
import com.service.MarkService;

@RestController
@CrossOrigin
public class MarkController {

	@Autowired
	MarkRepo markRepo;
	
	@Autowired
	StudentRepo studentRepo;
	
	@Autowired
	MarkService markService;
	
	
	
	@PostMapping("/savemark/{sno}")
	public String savemark(@RequestBody Mark mark,@PathVariable("sno")Long sno) {
		Student student = studentRepo.findById(sno).orElse(null);
		if(student==null) {
			return "Student not found";
		}
		List<Mark> marks = student.getMarks();
		for(Mark m:marks) {
			if(m.getmId().equals(mark.getmId())) {
				return "Student marks already entered!";
			}
		}
		mark.setStudent(student);
		return markService.addStudentMark(mark);
	}
	
	@GetMapping("/generateRank/{type}")
	public List<Mark> generateGrade(@PathVariable("type") String type) {
		boolean isGenerated = markService.generateRank(type);
		return markRepo.findBymIdStartsWithOrderByGradeAsc(type);
	}
	
	@GetMapping("/getMark/{id}")
	public Optional<Mark> getMarks(@PathVariable("id") String id) {
		return markRepo.findById(id);
		
	}
	
	
}
