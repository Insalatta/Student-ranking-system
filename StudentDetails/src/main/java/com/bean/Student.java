package com.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ValueGenerationType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Student {
	
	
	private String name;
	@Id
	private Long sno;
	@Column(unique=true)
	private Long admissionNo;
	private String dob;
	private String aadharNo;
	private String address;
	private String bloodGrp;
	private String accNo;
	private String phone;
	@OneToMany (mappedBy="student")
	@JsonIgnore
	private List<Mark> marks =  new ArrayList<Mark>();
	
	
	public Long getSno() {
		return sno;
	}
	public void setSno(Long sno) {
		this.sno = sno;
	}
	public List<Mark> getMarks() {
		return marks;
	}
	public void setMarks(List<Mark> marks) {
		this.marks = marks;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getAdmissionNo() {
		return admissionNo;
	}
	public void setAdmissionNo(Long admissionNo) {
		this.admissionNo = admissionNo;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAadharNo() {
		return aadharNo;
	}
	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getBloodGrp() {
		return bloodGrp;
	}
	public void setBloodGrp(String bloodGrp) {
		this.bloodGrp = bloodGrp;
	}
	public String getAccNo() {
		return accNo;
	}
	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public void generateMarkList() {
		for(int i=0;i<6;i++) {
			marks.add(new Mark());
		}
	}
	
}
