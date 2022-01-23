package com.project.recruitment.controller.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.Column;
import java.util.Date;

@Data
public class CandidateProfileRequest {
    @JsonProperty("recruitment_status")
    private int recruitmentStatus;

    public int getRecruitmentStatus() {
        return recruitmentStatus;
    }

    public void setRecruitmentStatus(int recruitmentStatus) {
        this.recruitmentStatus = recruitmentStatus;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Integer departmentId) {
        this.departmentId = departmentId;
    }

    public Integer getRecruitmentId() {
        return recruitmentId;
    }

    public void setRecruitmentId(Integer recruitmentId) {
        this.recruitmentId = recruitmentId;
    }

    private String name;

    private String gender;

    @JsonProperty("date_of_birth")
    private Date dateOfBirth;

    @JsonProperty("identity_card")
    private String identityCard;

    private String phone;

    private String description;

    @JsonProperty("department_id")
    private Integer departmentId;

    @JsonProperty("recruitment_id")
    private Integer recruitmentId;


}
