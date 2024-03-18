package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface OrderRepository extends JpaRepository <Order, Long> {

    //Devuelve un listado con los distintos estados por los que puede pasar un pedido.

    //Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

    //Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

    //Devuelve un listado de todos los pedidos que fueron rechazados en un año especifico.

    //Devuelve un listado de todos los pedidos que han sido entregados en el mes de __ de cualquier año.
    //public List<Object> findByMesAndYear(String mes, LocalDate year);

    //4. ¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma descendente por el número de pedidos.
    @Query("SELECT o.status, COUNT(o) " +
            "FROM Order o " +
            "GROUP BY o.status " +
            "ORDER BY COUNT(o) DESC")
    List<Object> orderByCity();
}
