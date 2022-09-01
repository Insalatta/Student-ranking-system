package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Mark;
import com.repository.MarkRepo;
import com.repository.StudentRepo;

@Service
public class MarkService {
	
	@Autowired
	MarkRepo markRepo;
	
	@Autowired
	StudentRepo studentRepo;
	
	public String addStudentMark(Mark mark) {
		if(mark.getTamil()==null||mark.getEnglish()==null||mark.getMaths()==null||mark.getScience()==null||mark.getSocial()==null) {
			
		}else {
			int fail = 0;
			if(mark.getTamil()<35) {
				fail++;
			}
			if(mark.getEnglish()<35) {
				fail++;
			}
			if(mark.getMaths()<35) {
				fail++;
			}
			if(mark.getScience()<35) {
				fail++;
			}
			if(mark.getSocial()<35) {
				fail++;
			}
			mark.setFailed(fail);
			mark.setTotal(mark.getTamil()+mark.getEnglish()+mark.getMaths()+mark.getScience()+mark.getSocial());
		}
		markRepo.save(mark);
		return "Mark saved successfully";
	}
	
	public boolean generateRank(String type){
		List<Mark> marks = markRepo.findBymIdStartsWithOrderByFailedAscTotalDesc(type);
		int rank = 1;
		boolean isFirst=true;
		int count = 1;
		for(int i=0;i<marks.size();i++) {
			if(marks.get(i).getFailed()==null) {
				continue;
			}
			if(isFirst) {
				marks.get(i).setGrade(rank);	
				isFirst=false;
			}else {
				if(marks.get(i).getTotal().equals(marks.get(i-1).getTotal()) && marks.get(i).getFailed().equals(marks.get(i-1).getFailed())) {
					marks.get(i).setGrade(rank);
					count++;
				}else {
					if(count>1) {
						rank = rank+count;
						count=1;
					}else {
						rank++;
					}
					marks.get(i).setGrade(rank);
				}
			}
		}
		markRepo.saveAll(marks);
		return true;
	}
}
