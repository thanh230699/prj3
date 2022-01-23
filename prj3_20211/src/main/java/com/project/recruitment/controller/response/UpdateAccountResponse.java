package com.project.recruitment.controller.response;

import lombok.Data;

@Data
public class UpdateAccountResponse extends GeneralResponse{
    private Boolean result;
    private Integer id;
    public Boolean getResult() {
        return result;
    }
    public void setResult(Boolean result) {
        this.result = result;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
}
