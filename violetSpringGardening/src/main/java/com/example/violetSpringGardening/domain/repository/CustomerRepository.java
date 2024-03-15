package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository <Customer, Long> {

    //1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
               "FROM Customer c " +
               "JOIN c.repSales e")
    List<Object> customersWithSalesRep ();


    //2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombre_representante_ventas " +
                   "FROM Customer c " +
                   "JOIN c.payments p " +
                   "JOIN c.repSales e " +
                   "ORDER BY c.customerName ASC")
    List<Object> customersThatHavePaid();
}
