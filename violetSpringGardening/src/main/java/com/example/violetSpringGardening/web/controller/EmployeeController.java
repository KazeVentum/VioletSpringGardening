package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.EmployeeServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Customer;
import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("http://localhost:8080")
public class EmployeeController {
    private final EmployeeServiceImpl employeeService;

    @Autowired
    public EmployeeController(EmployeeServiceImpl employeeService) {
        this.employeeService = employeeService;
    }


    @GetMapping("/employees/all")
    public List<Employee> getAllEmployees(){ return employeeService.getAll();}

    @GetMapping("/employeesWithTheirBoss")
    public List<Object> employeesWithTheirBoss(){return employeeService.employeesWithTheirBoss();}

    @GetMapping("/employeesWithTheBossOfTheirBoss")
    public List<Object> employeesWithTheBossOfTheirBoss(){return employeeService.employeesWithTheBossOfTheirBoss();}
    //FALTA (DA VACIO)
    @GetMapping("/employeesWithoutOffice")
    public List<Object> employeesWithoutOffice(){return employeeService.employeesWithoutOffice();}
    //FALTA (DA VACIO)
    @GetMapping("/employeesWithoutCustomer")
    public List<Object> employeesWithoutCustomer(){return employeeService.employeesWithoutCustomer();}

    @GetMapping("/employeesOfficeWithoutCustomer")
    public List<Object> employeesOfficeWithoutCustomer(){return employeeService.employeesOfficeWithoutCustomer();}

    @GetMapping("/employeesWithoutOfficeAndCustomer")
    public List<Object> employeesWithoutOfficeAndCustomer(){return employeeService.employeesWithoutOfficeAndCustomer();}

    @GetMapping("/employeesWithoutCustomersBoss")
    public List<Object> employeesWithoutCustomersBoss(){return employeeService.employeesWithoutCustomersBoss();}

    @GetMapping("/totalCustomersPerSalesRep")
    public List<Object> totalCustomersPerSalesRep(){return employeeService.totalCustomersPerSalesRep();}
}
