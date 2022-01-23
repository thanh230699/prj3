package com.project.recruitment.controller.response;

import com.project.recruitment.entity.CandidateProfile;
import lombok.Data;

import java.util.List;

@Data
public class CandidateProfileResponse extends GeneralResponse{
    private List<CandidateProfile> data;

    public List<CandidateProfile> getData() {
        return data;
    }

    public void setData(List<CandidateProfile> data) {
        this.data = data;
    }

    
}
