package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.PaymentRepository;
import com.example.violetSpringGardening.persistence.entity.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    public List<Object> averagePaymentByYear(String year){return paymentRepository.averagePaymentByYear(year);}

    public List<Object> paymentsByCustomer(){return paymentRepository.paymentsByCustomer();}

    public List<Object> paymentTotalPerYear(){return paymentRepository.paymentTotalPerYear();}

    public List<Object> bussinessInvoicing(){return paymentRepository.bussinessInvoicing();}

    public List<Object> bussinessInvoicingPerProduct(){return paymentRepository.bussinessInvoicingPerProduct();}

    public List<Object> bussinessInvoicingByProductCode(String startsWith){return paymentRepository.bussinessInvoicingByProductCode(startsWith);}



    public List<Object> findPaymentsYearMethod(String method, String year){return paymentRepository.findPaymentsYearMethod(method, year);}

    public List<Object> findClientCodesPaymentYear(String year){return paymentRepository.findClientCodesPaymentYear(year);}

}
