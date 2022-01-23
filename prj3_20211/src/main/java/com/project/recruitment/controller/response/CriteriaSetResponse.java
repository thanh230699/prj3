package com.project.recruitment.controller.response;

import com.project.recruitment.entity.CriteriaSet;
import lombok.Data;

import java.util.List;

@Data
public class CriteriaSetResponse extends GeneralResponse{
    List<CriteriaSet> data;

    public List<CriteriaSet> getData() {
        return data;
    }

    public void setData(List<CriteriaSet> data) {
        this.data = data;
    }

    
}
