package com.example.violetSpringGardening.persistence.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class OrderDetailId implements Serializable {
    @Column(name = "codigo_pedido",  insertable=false, updatable=false)
    private Integer orderCode;

    @Column(name = "codigo_producto",  insertable=false, updatable=false)
    private String productCode;

    public Integer getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(Integer orderCode) {
        this.orderCode = orderCode;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }
}
