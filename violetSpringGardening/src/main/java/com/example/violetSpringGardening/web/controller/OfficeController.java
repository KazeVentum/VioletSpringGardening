package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.OfficeServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("http://localhost:8080")
public class OfficeController {

    private final OfficeServiceImpl officeService;

    @Autowired
    public OfficeController(OfficeServiceImpl officeService) {
        this.officeService = officeService;
    }

    @GetMapping("/offices/all")
    public List<Office> getAllOffices(){return officeService.getAll();}
}
