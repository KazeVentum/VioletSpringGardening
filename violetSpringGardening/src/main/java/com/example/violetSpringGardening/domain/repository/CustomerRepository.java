package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Customer;
import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface CustomerRepository extends JpaRepository <Customer, Long> {

    // Devuelve un listado con el nombre de los todos los clientes españoles.
    List<Customer> findAllByCountry(String country); //objeto completo

    // Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 30.
    //List<Customer> findAllDistinctByCityAndRepSales(String city, Employee employeeCode);

    //6. Calcula el número de clientes que tiene la empresa.
    long count();

    //10. Calcula el número de clientes que no tiene asignado representante de ventas.
    @Query("SELECT COUNT(*)  FROM Customer c WHERE c.repSales IS NULL")
    List<Object> totalCustomersWithoutEmployee();

    // ¿Cuántos clientes existen con domicilio en una ciudad especifica?
    long countByCityLikeIgnoreCase(String city);

   // ¿Calcula cuántos clientes tiene cada una de las ciudades que empiezan por una letra específica?
    @Query("SELECT COUNT(c) , c.city FROM Customer c group by c.city  HAVING LOWER(c.city) LIKE LOWER(:cityLetter) || '%'")
    List<Object> totalCustomersByCity(String cityLetter);



    //1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.

    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
               "FROM Customer c " +
               "JOIN c.repSales e")
    List<Object> customersWithSalesRep ();


    //2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombre_representante_ventas " +
                   "FROM Customer c " +
                   "JOIN c.payments p " +
                   "JOIN c.repSales e " +
                   "ORDER BY c.customerName ASC")
    List<Object> customersThatHavePaid();


    //3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombreRepresentante " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Object> customersThatHaventPaid();


    //4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS salesRepresentativeName, CONCAT(o.city) AS officeCity " +
            "FROM Customer c " +
            "JOIN c.payments p " +
            "JOIN c.repSales e " +
            "JOIN e.office o " +
            "ORDER BY c.customerName ASC")
    List<Object> customersThatHavePaidAndOfficeCity();


    //5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    @Query("SELECT c.customerName AS clienteSinPago, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombreRepresentanteVentas, o.city AS ciudadOficina " +
            "FROM Customer c " +
            "LEFT JOIN c.payments p " +
            "JOIN c.repSales e " +
            "JOIN e.office o " +
            "WHERE p IS NULL")
    List<Object> customersThatHaventPaidAndOfficeCity();


    //7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombreRepresentante, o.city AS ciudadRepresentante " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN e.office o")
    List<Object> allCustomersWithSalesRepCity();


    //10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.
    @Query("SELECT DISTINCT c.customerName AS nombreCliente " +
            "FROM Customer c " +
            "JOIN c.orders o " +
            "WHERE o.deliverDate > o.expectedDate OR o.deliverDate IS NULL")
    List<Object> customersWithLateDeliveries();


    //12. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pago.
    @Query("SELECT c " +
            "FROM Customer c " +
            "WHERE NOT EXISTS (SELECT 1 FROM Payment p WHERE p.customer = c)")
    List<Object> customersWithoutPayments();


    //13. Devuelve un listado que muestre solamente los clientes que no han realizado ningún pedido.
    @Query("SELECT c.customerName " +
            "FROM Customer c " +
            "WHERE NOT EXISTS (SELECT 1 FROM Order o WHERE o.customer = c)")
    List<Object> customersWithoutOrders();


    //14. Devuelve un listado que muestre los clientes que no han realizado ningún pago y los que no han realizado ningún pedido.
    @Query("SELECT c.customerName " +
            "FROM Customer c " +
            "WHERE NOT EXISTS (" +
            "    SELECT 1 " +
            "    FROM Payment p " +
            "    WHERE p.customer = c " +
            ") " +
            "AND NOT EXISTS (" +
            "    SELECT 1 " +
            "    FROM Order o " +
            "    WHERE o.customer = c" +
            ")")
    List<Object> customersWithoutOrdersAndPayments();


   //22. Devuelve un listado con los clientes que han realizado algún pedido pero no han realizado ningún pago.
    @Query("SELECT DISTINCT c.customerName " +
            "FROM Customer c " +
            "JOIN c.orders o " +
            "WHERE NOT EXISTS (SELECT 1 FROM Payment p WHERE p.customer = c)")
    List<Object> customersWithOdersButWithoutPayments();


    // consultas resumen
    //2. ¿Cuántos clientes tiene cada país?
    @Query("SELECT c.country, COUNT(c) " +
            "FROM Customer c " +
            "GROUP BY c.country")
    List<Object> customersPerCountry();
}
