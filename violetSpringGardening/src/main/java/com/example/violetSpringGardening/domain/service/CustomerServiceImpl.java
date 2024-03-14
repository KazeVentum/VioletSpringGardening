package com.example.violetSpringGardening.domain.service;


import com.example.violetSpringGardening.domain.repository.CustomerRepository;
import com.example.violetSpringGardening.persistence.entity.Customer;
import com.example.violetSpringGardening.persistence.entity.dtos.CustomerDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ServiceInterface<CustomerDTO>{
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    @Override
    public List<CustomerDTO> getAll() {
        return customerRepository.findAll().stream()
                .map(Customer::toDTO)
                .toList();
    }
}
