package com.example.violetSpringGardening.persistence.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "detalle_pedido")
public class OrderDetail {

    @EmbeddedId
    private OrderDetailId orderDetailId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_pedido")
    private Order order;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_producto")
    private Product product;

    @Column(name = "cantidad")
    private int quantity;

    @Column(name = "precio_unidad")
    private float itemPrice;

    @Column(name = "numero_linea")
    private int lineNumber;


    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public float getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(float itemPrice) {
        this.itemPrice = itemPrice;
    }

    public int getLineNumber() {
        return lineNumber;
    }

    public void setLineNumber(int lineNumber) {
        this.lineNumber = lineNumber;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "id=" + orderDetailId +
                ", order=" + order +
                ", product=" + product +
                ", amount=" + quantity +
                ", itemPrice=" + itemPrice +
                ", lineNumber=" + lineNumber +
                '}';
    }
}
