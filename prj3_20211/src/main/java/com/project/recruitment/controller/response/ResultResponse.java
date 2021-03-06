package com.project.recruitment.controller.response;

import lombok.Data;

@Data
public class ResultResponse extends GeneralResponse{
    private Boolean result;
    private String message;
    public Boolean getResult() {
        return result;
    }
    public void setResult(Boolean result) {
        this.result = result;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
