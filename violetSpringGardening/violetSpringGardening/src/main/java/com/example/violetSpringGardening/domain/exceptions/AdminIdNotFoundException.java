package com.example.violetSpringGardening.domain.exceptions;

public class AdminIdNotFoundException extends RuntimeException {

    public AdminIdNotFoundException(String message){
        super(message);
    }
}
