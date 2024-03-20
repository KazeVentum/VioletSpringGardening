package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.ProductRange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRangeRepository extends JpaRepository <ProductRange, Long> {

    // Devuelve un listado con todos los productos que pertenecen a la gama específica y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio.
    @Query("SELECT p " +
            "    FROM Product p " +
            "    WHERE p.range.range = :specificRange " +
            "    AND p.stockQuantity > 100 " +
            "    ORDER BY p.salePrice DESC")
    List<Object> productsBySpecificRange(String specificRange);

}
