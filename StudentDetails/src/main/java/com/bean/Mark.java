package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;



@Entity
public class Mark {
	@Id
	private String mId;
	@ManyToOne
	private Student student;
	private Integer tamil;
	private Integer english;
	private Integer maths;
	private Integer science;
	private Integer social;
	private Integer total;
	private Integer grade;
	private Integer failed;
	
	
	public String getmId() {
		return mId;
	}


	public void setmId(String mId) {
		this.mId = mId;
	}


	public Student getStudent() {
		return student;
	}


	public void setStudent(Student student) {
		this.student = student;
	}


	public Integer getTamil() {
		return tamil;
	}


	public void setTamil(Integer tamil) {
		this.tamil = tamil;
	}


	public Integer getEnglish() {
		return english;
	}


	public void setEnglish(Integer english) {
		this.english = english;
	}


	public Integer getMaths() {
		return maths;
	}


	public void setMaths(Integer maths) {
		this.maths = maths;
	}


	public Integer getScience() {
		return science;
	}


	public void setScience(Integer science) {
		this.science = science;
	}


	public Integer getSocial() {
		return social;
	}


	public void setSocial(Integer social) {
		this.social = social;
	}


	public Integer getTotal() {
		return total;
	}


	public void setTotal(Integer total) {
		this.total = total;
	}


	public Integer getGrade() {
		return grade;
	}


	public void setGrade(Integer grade) {
		this.grade = grade;
	}


	public Integer getFailed() {
		return failed;
	}


	public void setFailed(Integer failed) {
		this.failed = failed;
	}


	@Override
	public String toString() {
		return "Mark [mId=" + mId + ", student=" + student + ", tamil=" + tamil + ", english=" + english + ", maths="
				+ maths + ", science=" + science + ", social=" + social + ", total=" + total + ", grade=" + grade + "]";
	}
	
	
}
