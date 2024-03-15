package com.example.violetSpringGardening.persistence.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "pedido")
public class Order {
    @Id
    @Column(name = "codigo_pedido")
    private int orderCode;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_pedido", nullable = false)
    private LocalDate orderDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_esperada", nullable = false)
    private LocalDate expectedDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_entrega")
    private LocalDate deliverDate;

    @Column(name = "estado", nullable = false)
    private String status;

    @Column(name = "comentarios")
    private String comments;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_cliente", nullable = false)
    private Customer customer;


    public int getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(int orderCode) {
        this.orderCode = orderCode;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public LocalDate getExpectedDate() {
        return expectedDate;
    }

    public void setExpectedDate(LocalDate expectedDate) {
        this.expectedDate = expectedDate;
    }

    public LocalDate getDeliverDate() {
        return deliverDate;
    }

    public void setDeliverDate(LocalDate deliverDate) {
        this.deliverDate = deliverDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderCode=" + orderCode +
                ", orderDate=" + orderDate +
                ", expectedDate=" + expectedDate +
                ", deliverDate=" + deliverDate +
                ", status=" + status +
                ", comments=" + comments +
                ", customer=" + customer +
                '}';
    }
}
