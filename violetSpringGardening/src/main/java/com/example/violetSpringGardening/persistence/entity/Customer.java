package com.example.violetSpringGardening.persistence.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="cliente")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_cliente")
    private int customerCode;

    @Column(name = "nombre_cliente", nullable = false)
    private String customerName;

    @Column(name = "nombre_contacto")
    private String contactName;

    @Column(name = "apellido_contacto")
    private String contactLastName;

    @Column(name = "telefono", nullable = false)
    private String phone;

    @Column(name = "fax", nullable = false)
    private String fax;

    @Column(name = "linea_direccion1", nullable = false)
    private String addressLine1;

    @Column(name = "linea_direccion2")
    private String addressLine2;

    @Column(name = "ciudad", nullable = false)
    private String city;

    @Column(name = "region")
    private String region;

    @Column(name = "pais")
    private String country;

    @Column(name = "codigo_postal")
    private String zipCode;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_empleado_rep_ventas") //FK
    private Employee repSales; //codigo de la tabla empleado

    @Column(name = "limite_credito")
    private double creditLimit;

    @JsonIgnore
    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Payment> payments;

    @JsonIgnore
    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Order> orders;

    public int getCustomerCode() {
        return customerCode;
    }

    public void setCustomerCode(int customerCode) {
        this.customerCode = customerCode;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getContactLastName() {
        return contactLastName;
    }

    public void setContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFax() {
        return fax;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public Employee getRepSales() {
        return repSales;
    }

    public void setRepSales(Employee repSales) {
        this.repSales = repSales;
    }

    public double getCreditLimit() {
        return creditLimit;
    }

    public void setCreditLimit(double creditLimit) {
        this.creditLimit = creditLimit;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerCode=" + customerCode +
                ", customerName='" + customerName + '\'' +
                ", contactName='" + contactName + '\'' +
                ", contactLastName='" + contactLastName + '\'' +
                ", phone='" + phone + '\'' +
                ", fax='" + fax + '\'' +
                ", addressLine1='" + addressLine1 + '\'' +
                ", addressLine2='" + addressLine2 + '\'' +
                ", city='" + city + '\'' +
                ", region='" + region + '\'' +
                ", country='" + country + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", creditLimit=" + creditLimit +
                ", repSales=" + repSales +
                '}';
    }
}
