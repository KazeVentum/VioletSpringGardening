package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository <Customer, Long> {

    //1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
    @Query("SELECT nombre_cliente, CONCAT(nombre, ' ', apellido1,  ' ',apellido2) AS nombre \n" +
            "FROM cliente \n" +
            "JOIN empleado ON cliente.codigo_empleado_rep_ventas = empleado.codigo_empleado;\n")
    List<Customer> customerWithHisSalesRep ();


    //2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
    @Query("SELECT nombre_cliente, CONCAT(empleado.nombre, ' ', empleado.apellido1, ' ', empleado.apellido2) AS nombre_representante_ventas\n" +
            "FROM cliente\n" +
            "JOIN pago ON cliente.codigo_cliente = pago.codigo_cliente\n" +
            "JOIN empleado ON empleado.codigo_empleado = cliente.codigo_empleado_rep_ventas\n" +
            "ORDER BY nombre_cliente ASC;")
    List<Object> customersThatHavePaid();
}
