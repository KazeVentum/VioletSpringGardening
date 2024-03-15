package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.CustomerServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("*")
public class CustomerController {

    private final CustomerServiceImpl customerService;

    @Autowired
    public CustomerController(CustomerServiceImpl customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> customersWithSalesRep(){return customerService.customersWithSalesRep();}

    @GetMapping
    public List<Customer> customersThatHavePaid(){return customerService.customersThatHavePaid();}
}
