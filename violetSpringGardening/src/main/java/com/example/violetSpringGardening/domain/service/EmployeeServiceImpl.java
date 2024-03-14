package com.example.violetSpringGardening.domain.service;


import com.example.violetSpringGardening.domain.repository.EmployeeRepository;
import com.example.violetSpringGardening.persistence.entity.Employee;
import com.example.violetSpringGardening.persistence.entity.dtos.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeServiceImpl implements ServiceInterface<EmployeeDTO>{

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public List<EmployeeDTO> getAll() {
        return employeeRepository.findAll().stream()
                .map(Employee::toDTO)
                .toList();
    }
}