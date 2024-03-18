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


    @GetMapping("/customers/all")
    public List<Customer> getAllCustomers(){ return customerService.getAll();}

    @GetMapping("/customersWithSalesRep")
    public List<Object> customersWithSalesRep(){return customerService.customersWithSalesRep();}

    @GetMapping("/customersThatHavePaid")
    public List<Object> customersThatHavePaid(){return customerService.customersThatHavePaid();}

    @GetMapping("/customersThatHaventPaid")
    public List<Object> customersThatHaventPaid(){return customerService.customersThatHaventPaid();}

    @GetMapping("/customersThatHavePaidAndOfficeCity")
    public List<Object> customersThatHavePaidAndOfficeCity(){return customerService.customersThatHavePaidAndOfficeCity();}

    @GetMapping("/customersThatHaventPaidAndOfficeCity")
    public List<Object> customersThatHaventPaidAndOfficeCity(){return customerService.customersThatHaventPaidAndOfficeCity();}

    @GetMapping("/allCustomersWithSalesRepCity")
    public List<Object> allCustomersWithSalesRepCity(){return customerService.allCustomersWithSalesRepCity();}

    @GetMapping("/customersWithLateDeliveries")
    public List<Object> customersWithLateDeliveries(){return customerService.customersWithLateDeliveries();}

    @GetMapping("/customersWithoutPayments")
    public List<Object> customersWithoutPayments(){return customerService.customersWithoutPayments();}

    @GetMapping("/customersWithoutOrders")
    public List<Object> customersWithoutOrders(){return customerService.customersWithoutOrders();}

    @GetMapping("/customersWithoutOrdersAndPayments")
    public List<Object> customersWithoutOrdersAndPayments(){return customerService.customersWithoutOrdersAndPayments();}

    @GetMapping("/customersWithOdersButWithoutPayments")
    public List<Object> customersWithOdersButWithoutPayments(){return customerService.customersWithOdersButWithoutPayments();}

    @GetMapping("/customersPerCountry")
    public List<Object> customersPerCountry(){return customerService.customersPerCountry();}
}
