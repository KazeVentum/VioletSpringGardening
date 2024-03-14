package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.PaymentRepository;
import com.example.violetSpringGardening.persistence.entity.Payment;
import com.example.violetSpringGardening.persistence.entity.dtos.PaymentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImpl implements ServiceInterface<PaymentDTO>{

    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }


    @Override
    public List<PaymentDTO> getAll() {
        return paymentRepository.findAll().stream()
                .map(Payment::toDTO)
                .toList();
    }
}
