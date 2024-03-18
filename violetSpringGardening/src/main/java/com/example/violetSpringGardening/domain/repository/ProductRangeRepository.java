package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.ProductRange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRangeRepository extends JpaRepository <ProductRange, Long> {

    //Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.


    //11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
//    @Query("SELECT DISTINCT c.customerName, pr.range.range " +
//            "FROM Customer c " +
//            "JOIN c.order o " +
//            "JOIN o.orderDetails od " +
//            "JOIN od.order order " +
//            "JOIN od.product pr " +
//            "JOIN pr.range g")
//    List<Object> productRangesWithEachCustomer();
}
