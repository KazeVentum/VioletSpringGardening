package com.example.violetSpringGardening.persistence.entity.dtos;

public class OrderDetailDTO {
    private Integer orderCode;
    private String productCode;
    private Integer amount;
    private double unitPrice;
    private Integer numberLine;

    // Constructor vacío
    public OrderDetailDTO() {}

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

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public Integer getNumberLine() {
        return numberLine;
    }

    public void setNumberLine(Integer numberLine) {
        this.numberLine = numberLine;
    }

}


