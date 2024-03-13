package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.security.JWTAuthtenticationConfig;
import com.example.violetSpringGardening.persistence.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    JWTAuthtenticationConfig jwtAuthtenticationConfig;

    @PostMapping("login")
    public User login(
            @RequestParam("newUser") String username,
            @RequestParam("encryptedPass") String encryptedPass) {

        String  token = jwtAuthtenticationConfig.getJWTToken(username);
        return new User(username, encryptedPass, token);

    }

}
