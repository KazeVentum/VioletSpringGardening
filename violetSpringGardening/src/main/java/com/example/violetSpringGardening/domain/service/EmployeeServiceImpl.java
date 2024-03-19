package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.EmployeeRepository;
import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class EmployeeServiceImpl implements ServiceInterface<Employee> {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    //methods
    @Override
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    public List<Object> employeesWithTheirBoss() {
        return employeeRepository.employeesWithTheirBoss();
    }

    public List<Object> employeesWithTheBossOfTheirBoss() {
        return employeeRepository.employeesWithTheBossOfTheirBoss();
    }

    public List<Object> employeesWithoutOffice() {
        return employeeRepository.employeesWithoutOffice();
    }

    public List<Object> employeesWithoutCustomer() {
        return employeeRepository.employeesWithoutCustomer();
    }

    public List<Object> employeesOfficeWithoutCustomer() {
        return employeeRepository.employeesOfficeWithoutCustomer();
    }

    public List<Object> employeesWithoutOfficeAndCustomer() {
        return employeeRepository.employeesWithoutOfficeAndCustomer();
    }

    public List<Object> employeesWithoutCustomersBoss() {
        return employeeRepository.employeesWithoutCustomersBoss();
    }

    public List<Object> totalCustomersPerSalesRep() {
        return employeeRepository.totalCustomersPerSalesRep();
    }

    public List<Object> findNameLastnameByBoss(int bossCode){return employeeRepository.findNameLastnameByBoss(bossCode);}

    public long count(){return employeeRepository.count();}

    public List<Object> findCompanyBoss(){return employeeRepository.findCompanyBoss();}
}

