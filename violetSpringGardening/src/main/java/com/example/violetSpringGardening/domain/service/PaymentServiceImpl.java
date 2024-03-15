package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.PaymentRepository;
import com.example.violetSpringGardening.persistence.entity.Payment;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PaymentServiceImpl implements ServiceInterface<Payment>{
    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }


    @Override
    public List<Payment> getAll() {
        return paymentRepository.findAll();
    }
}
