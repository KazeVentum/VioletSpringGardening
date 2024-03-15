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
@CrossOrigin("http://localhost:8080")
public class CustomerController {

    private final CustomerServiceImpl customerService;

    @Autowired
    public CustomerController(CustomerServiceImpl customerService) {
        this.customerService = customerService;
    }

    
    @GetMapping("/customersWithSalesRep")
    public List<Object> customersWithSalesRep(){return customerService.customersWithSalesRep();}

    @GetMapping("/customersThatHavePaid")
    public List<Object> customersThatHavePaid(){return customerService.customersThatHavePaid();}

    @GetMapping("/customers/all")
    public List<Customer> getAllCustomers(){ return customerService.getAll();}
}
