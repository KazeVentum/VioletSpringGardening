package com.example.violetSpringGardening.persistence.entity;


import com.example.violetSpringGardening.persistence.entity.dtos.PaymentDTO;
import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "pago")
public class Payment {
    @Id
    @Column(name = "id_transaccion", nullable = false)
    private String transactionId;

    @Column(name = "forma_pago", nullable = false)
    private String wayToPay;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_pago", nullable = false)
    private Date paymentDate;

    @Column(name = "total", nullable = false)
    private double total;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_cliente")
    private Customer customer;

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

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public PaymentDTO toDTO() {
        PaymentDTO dto = new PaymentDTO();
        dto.setTransactionId(this.transactionId);
        dto.setWayToPay(this.wayToPay);
        dto.setPaymentDate(this.paymentDate);
        dto.setTotal(this.total);
        dto.setCustomerCode(this.customer != null ? this.customer.getCustomerCode() : null);
        return dto;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "transactionId='" + transactionId + '\'' +
                ", wayToPay='" + wayToPay + '\'' +
                ", paymentDate=" + paymentDate +
                ", total=" + total +
                ", customer=" + customer +
                '}';
    }
}
