package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OfficeRepository extends JpaRepository <Office, Long> {

    // Devuelve un listado con la ciudad y el teléfono de las oficinas de España.
    List<Office> findAllByCountryLikeIgnoreCase(String country); //objeto completo

    // Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.
    @Query("SELECT o.officeCode, o.city FROM Office o")
    List<Object> findOfficeCodesAndCities();

    //6. Lista la dirección de las oficinas que tengan clientes en una ciudad especifica
    @Query("SELECT DISTINCT o.addressLine1, o.addressLine2, o.city, o.region, o.country, o.zipCode " +
            "FROM Office o " +
            "JOIN o.employees e " +
            "JOIN e.customers c " +
            "WHERE c.city = :cityName")
    List<Object> officesWithClientsInSpecificCity(String cityName);


//    //21. Devuelve las oficinas donde no trabajan ninguno de los empleados que hayan sido los representantes de ventas de algún cliente que haya realizado la compra de algún producto de gama especifica
//    @Query("SELECT DISTINCT o.officeCode " +
//            "FROM Office o " +
//            "JOIN Employee e ON o.officeCode = e.office.officeCode " +
//            "JOIN Customer c ON e.employeeCode = c.repSales.employeeCode " +
//            "JOIN Payment p ON c.customerCode = p.customer.customerCode " +
//            "JOIN Order ord ON c.customerCode = ord.customer.customerCode " +
//            "JOIN OrderDetail.orderDetailId od ON ord.orderCode = od.order.orderCode " +
//            "JOIN Product prod ON od.product.productCode = prod.productCode " +
//            "WHERE prod.productRange.range != :productRange")
//    List<Object> officesWithoutSalesRepByRange(String productRange);
}
