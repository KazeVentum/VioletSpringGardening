package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.PaymentServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("https://localhost:8080")
public class PaymentController {
    private final PaymentServiceImpl paymentService;

    @Autowired
    public PaymentController(PaymentServiceImpl paymentService) {
        this.paymentService = paymentService;
    }

    @GetMapping("payments/all")
    List<Payment> getAllPayments(){return paymentService.getAll();}

    @GetMapping("/averagePaymentByYear")
    List<Object> averagePaymentByYear(@RequestParam String year){return paymentService.averagePaymentByYear(year);}

    @GetMapping("/paymentsByCustomer")
    List<Object> paymentsByCustomer(){return paymentService.paymentsByCustomer();}

    @GetMapping("/paymentTotalPerYear")
    List<Object> paymentTotalPerYear(){return paymentService.paymentTotalPerYear();}
}
