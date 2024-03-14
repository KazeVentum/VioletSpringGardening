package com.example.violetSpringGardening.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name="producto")
public class Product {
    @Id
    @Column(name = "codigo_producto")
    private String productCode;

    @Column(name = "nombre", nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "gama", nullable = false) //FK que usa gama_producto
    private ProductRange range;

    @Column(name = "dimensiones")
    private String dimensions;

    @Column(name = "proveedor")
    private String supplier;

    @Column(name = "descripcion")
    private String description;

    @Column(name = "cantidad_en_stock", nullable = false)
    private int stockQuantity;

    @Column(name = "precio_venta", nullable = false)
    private float salePrice;

    @Column(name = "precio_proveedor")
    private float supplierPrice;

    public Product(){}

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductRange getRange() {
        return range;
    }

    public void setRange(ProductRange range) {
        this.range = range;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public float getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(float salePrice) {
        this.salePrice = salePrice;
    }

    public float getSupplierPrice() {
        return supplierPrice;
    }

    public void setSupplierPrice(float supplierPrice) {
        this.supplierPrice = supplierPrice;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productCode='" + productCode + '\'' +
                ", name='" + name + '\'' +
                ", range=" + range +
                ", dimensions='" + dimensions + '\'' +
                ", supplier='" + supplier + '\'' +
                ", description='" + description + '\'' +
                ", stockQuantity=" + stockQuantity +
                ", salePrice=" + salePrice +
                ", supplierPrice=" + supplierPrice +
                '}';
    }
}
