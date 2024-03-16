package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OfficeRepository extends JpaRepository <Office, Long> {

//    //6. Lista la dirección de las oficinas que tengan clientes en una ciudad especifica
//    @Query("SELECT DISTINCT o.addressLine1, o.addressLine2, o.city, o.region, o.country, o.zipCode" +
//            "FROM Office o" +
//            "JOIN o.employees e" +
//            "JOIN e.customers c" +
//            "WHERE c.city = :cityName")
//    List<Object> officesWithClientsInSpecificCity(String cityName);


}
