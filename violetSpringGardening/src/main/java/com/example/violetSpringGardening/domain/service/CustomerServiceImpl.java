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


    //methods
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

    public List<Object> customersThatHaventPaid(){return customerRepository.customersThatHaventPaid();}

    public List<Object> customersThatHavePaidAndOfficeCity(){return customerRepository.customersThatHavePaidAndOfficeCity();}

    public List<Object> customersThatHaventPaidAndOfficeCity(){return customerRepository.customersThatHaventPaidAndOfficeCity();}

    public List<Object> allCustomersWithSalesRepCity(){return customerRepository.allCustomersWithSalesRepCity();}

    public List<Object> customersWithLateDeliveries(){return customerRepository.customersWithLateDeliveries();}

    public List<Object> customersWithoutPayments(){return customerRepository.customersWithoutPayments();}

    public List<Object> customersWithoutOrders(){return customerRepository.customersWithoutOrders();}

    public List<Object> customersWithoutOrdersAndPayments(){return customerRepository.customersWithoutOrdersAndPayments();}

    public List<Object> customersWithOdersButWithoutPayments(){return customerRepository.customersWithOdersButWithoutPayments();}
}
