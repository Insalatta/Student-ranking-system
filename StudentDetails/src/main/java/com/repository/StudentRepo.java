package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Student;
public interface StudentRepo extends JpaRepository<Student,Long>{

}
