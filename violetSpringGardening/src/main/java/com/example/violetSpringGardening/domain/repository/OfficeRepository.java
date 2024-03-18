package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OfficeRepository extends JpaRepository <Office, Long> {

    // Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
    List<Object> findByCountryIgnoreCase(String country);


    // Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

    //6. Lista la dirección de las oficinas que tengan clientes en una ciudad especifica
    @Query("SELECT DISTINCT o.addressLine1, o.addressLine2, o.city, o.region, o.country, o.zipCode " +
            "FROM Office o " +
            "JOIN o.employees e " +
            "JOIN e.customers c " +
            "WHERE c.city = :cityName")
    List<Object> officesWithClientsInSpecificCity(String cityName);


//    //21. Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de gama especifica
//    @Query("SELECT DISTINCT o " +
//            "FROM Office o " +
//            "JOIN o.employees e " +
//            "JOIN e.customers c " +
//            "JOIN c.orders p " +
//            "JOIN p.orderDetails dp " +
//            "JOIN dp.product pr " +
//            "WHERE pr.range.range != :productRange")
//    List<Object> officesWithoutSalesRepByRange(String productRange);
}
