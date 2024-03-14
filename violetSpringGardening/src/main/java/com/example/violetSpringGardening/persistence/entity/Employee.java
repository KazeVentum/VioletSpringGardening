package com.example.violetSpringGardening.persistence.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "empleado")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_empleado")
    private int employeeCode;

    @Column(name = "nombre", nullable = false)
    private String name;

    @Column(name = "apellido1", nullable = false)
    private String lastName1;

    @Column(name = "apellido2")
    private String lastName2;

    @Column(name = "extension", nullable = false)
    private String extension;

    @Column(name = "email", nullable = false)
    private String email;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_oficina")
    private Office office; //tomado de tabla oficina

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_jefe")
    private Employee boss; //tomado de la misma tabla

    @Column(name = "puesto")
    private String charge;


    @OneToMany(mappedBy = "repSales", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Customer> customers;

    public int getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(int employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName1() {
        return lastName1;
    }

    public void setLastName1(String lastName1) {
        this.lastName1 = lastName1;
    }

    public String getLastName2() {
        return lastName2;
    }

    public void setLastName2(String lastName2) {
        this.lastName2 = lastName2;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Office getOfficeCode() {
        return office;
    }

    public void setOfficeCode(Office office) {
        this.office = office;
    }

    public Employee getBoss() {
        return boss;
    }

    public void setBossCode(Employee boss) {
        this.boss = boss;
    }

    public String getCharge() {
        return charge;
    }

    public void setCharge(String charge) {
        this.charge = charge;
    }


    @Override
    public String toString() {
        return "Employee{" +
                "employeeCode=" + employeeCode +
                ", name='" + name + '\'' +
                ", lastName1='" + lastName1 + '\'' +
                ", lastName2='" + lastName2 + '\'' +
                ", extension='" + extension + '\'' +
                ", email='" + email + '\'' +
                ", charge='" + charge + '\'' +
                ", officeCode=" + office +
                ", bossCode=" + boss +
                '}';
    }
}
