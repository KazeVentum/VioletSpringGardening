package com.example.violetSpringGardening.persistence.entity.dtos;

import java.sql.Date;

public class PaymentDTO {
    private String transactionId;
    private String wayToPay;
    private Date paymentDate;
    private double total;
    private Integer customerCode;

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getWayToPay() {
        return wayToPay;
    }

    public void setWayToPay(String wayToPay) {
        this.wayToPay = wayToPay;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Integer getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(Integer customerCode) {
        this.customerCode = customerCode;
    }
}
