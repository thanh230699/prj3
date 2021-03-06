package com.project.recruitment.controller.response;

import com.project.recruitment.entity.Recruitment;
import lombok.Data;

import java.util.List;
@Data
public class RecruitmentResponse extends GeneralResponse{
    public List<Recruitment> data;

    public List<Recruitment> getData() {
        return data;
    }

    public void setData(List<Recruitment> data) {
        this.data = data;
    }
    
}
