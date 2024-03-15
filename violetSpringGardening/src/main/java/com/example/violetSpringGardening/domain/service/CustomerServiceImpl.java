package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.CustomerRepository;
import com.example.violetSpringGardening.persistence.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ServiceInterface<Customer> {

    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }


    public List<Object> customersWithSalesRep() {
        return customerRepository.customersWithSalesRep();
    }

    public List<Object> customersThatHavePaid() {
        return customerRepository.customersThatHavePaid();
    }
}
