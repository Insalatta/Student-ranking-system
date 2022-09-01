package com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bean.Mark;


public interface MarkRepo extends JpaRepository<Mark, String>{
	
	List<Mark> findBymIdStartsWith(String id);
	
	List<Mark> findBymIdStartsWithOrderByFailedAscTotalDesc(String mId); 
	
	List<Mark> findBymIdOrderByGrade(String mId);
	
	List<Mark> findBymIdStartsWithOrderByGradeAsc(String mId); 
	
	
}
