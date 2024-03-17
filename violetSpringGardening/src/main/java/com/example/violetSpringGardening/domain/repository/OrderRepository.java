package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository <Order, Long> {

    //4. ¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma descendente por el número de pedidos.
    @Query("SELECT o.status, COUNT(o) " +
            "FROM Order o " +
            "GROUP BY o.status " +
            "ORDER BY COUNT(o) DESC")
    List<Object> orderByCity();
}
