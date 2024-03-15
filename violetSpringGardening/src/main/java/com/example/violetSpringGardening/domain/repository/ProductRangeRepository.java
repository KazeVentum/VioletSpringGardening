package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.ProductRange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRangeRepository extends JpaRepository <ProductRange, Long> {
    //11. Devuelve un listado de las diferentes gamas de producto que ha comprado cada cliente.
    @Query("SELECT DISTINCT c.customerName, pr.range.range" +
            "FROM Customer c" +
            "JOIN c.orders o" +
            "JOIN o.orderDetails od" +
            "JOIN od.product pr")
    List<Object> productRangesWithEachCustomer();
}
