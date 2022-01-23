package com.project.recruitment.controller.response;

import lombok.Data;

@Data
public class LoginResponse extends GeneralResponse {
    private Boolean result;

    private String role;

    public Boolean getResult() {
        return result;
    }

    public void setResult(Boolean result) {
        this.result = result;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    
}
