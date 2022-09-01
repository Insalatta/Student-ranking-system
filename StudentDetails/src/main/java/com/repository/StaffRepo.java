package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bean.Staff;


public interface StaffRepo extends JpaRepository<Staff ,String>{
	
}
