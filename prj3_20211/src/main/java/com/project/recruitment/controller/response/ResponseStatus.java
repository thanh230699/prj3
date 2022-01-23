package com.project.recruitment.controller.response;



import java.io.Serializable;


public class ResponseStatus implements Serializable {

    private static final long serialVersionUID = 7143918718522374545L;
    private String code;

    private String message;

    public ResponseStatus(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    
}
