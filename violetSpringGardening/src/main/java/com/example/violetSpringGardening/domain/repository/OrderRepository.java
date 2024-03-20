package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface OrderRepository extends JpaRepository <Order, Long> {

    // Devuelve un listado con los distintos estados por los que puede pasar un pedido.
    @Query("SELECT DISTINCT o.status FROM Order o GROUP BY o.status")
    List<Object> orderStatus();


    // Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
    @Query("SELECT o.orderCode, o.customer.customerCode, o.deliverDate, o.expectedDate FROM Order o WHERE o.deliverDate > o.expectedDate")
    List<Object> lateOrders();


    // Devuelve un listado de todos los pedidos que fueron rechazados en un año especifico.
    @Query("SELECT o.orderCode, o.customer.customerCode, o.expectedDate, o.deliverDate, o.status FROM Order o WHERE YEAR(o.deliverDate) = ?1 AND o.status = 'Rechazado'")
    List<Object> ordersRejectedInYear(String year);


    // ¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma descendente por el número de pedidos.
    @Query("SELECT o.status, COUNT(o) " +
            "FROM Order o " +
            "GROUP BY o.status " +
            "ORDER BY COUNT(o) DESC")
    List<Object> orderByStatus();

}
