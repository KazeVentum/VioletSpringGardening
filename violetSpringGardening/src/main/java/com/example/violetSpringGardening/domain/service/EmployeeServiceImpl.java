package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.EmployeeRepository;
import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EmployeeServiceImpl implements ServiceInterface<Employee> {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }
}
