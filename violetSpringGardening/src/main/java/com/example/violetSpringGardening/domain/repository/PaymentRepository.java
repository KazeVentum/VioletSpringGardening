package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepository extends JpaRepository <Payment, Long> {

    //Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

    //Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

    //3. ¿Cuál fue el pago medio en un año específico?
    @Query("SELECT AVG(p.total) " +
            "FROM Payment p " +
            "WHERE YEAR(p.paymentDate) = :year")
    List<Object> averagePaymentByYear(String year);

    //Calcula la fecha del primer y último pago realizado por cada uno de los clientes. El listado deberá mostrar el nombre y los apellidos de cada cliente.
    @Query("SELECT c.customerName, c.contactName, c.contactLastName, MIN(p.paymentDate), MAX(p.paymentDate) " +
            "FROM Customer c " +
            "LEFT JOIN c.payments p " +
            "GROUP BY c.customerName, c.contactName, c.contactLastName")
    List<Object> paymentsByCustomer();


    //La facturación que ha tenido la empresa en toda la historia,
    // indicando la base imponible, el IVA y el total facturado.
    // La base imponible se calcula sumando el coste del producto por el número de unidades vendidas de la tabla detalle_pedido.
    // El IVA es el 21 % de la base imponible, y el total la suma de los dos campos anteriores.
    @Query("SELECT SUM(od.quantity * p.salePrice) AS tax, " +
            "       SUM(od.quantity * p.salePrice) * 0.21 AS iva, " +
            "       SUM(od.quantity * p.salePrice) + (SUM(od.quantity * p.salePrice) * 0.21) AS totalInvoicing " +
            "FROM OrderDetail od " +
            "JOIN od.product p")
    List<Object> bussinessInvoicing();

    //La misma información que en la pregunta anterior, pero agrupada por código de producto.
    @Query("SELECT p.productCode, " +
            "       SUM(od.quantity * p.salePrice) AS tax, " +
            "       SUM(od.quantity * p.salePrice) * 0.21 AS iva, " +
            "       SUM(od.quantity * p.salePrice) + (SUM(od.quantity * p.salePrice) * 0.21) AS totalInvoicing " +
            "FROM OrderDetail od " +
            "JOIN od.product p " +
            "GROUP BY p.productCode")
    List<Object> bussinessInvoicingPerProduct();

    //La misma información que en la pregunta anterior, pero agrupada por código de producto filtrada por los códigos que empiecen por `OR`.
    @Query("SELECT p.productCode, " +
            "       SUM(od.quantity * p.salePrice) AS tax, " +
            "       SUM(od.quantity * p.salePrice) * 0.21 AS iva, " +
            "       SUM(od.quantity * p.salePrice) + (SUM(od.quantity * p.salePrice) * 0.21) AS totalInvoicing " +
            "FROM OrderDetail od " +
            "JOIN od.product p " +
            "WHERE p.productCode LIKE :startsWith " +
            "GROUP BY p.productCode")
    List<Object> bussinessInvoicingByProductCode(String startsWith);

    //Muestre la suma total de todos los pagos que se realizaron para cada uno de los años que aparecen en la tabla pagos
    @Query("SELECT YEAR(p.paymentDate), SUM(p.total) " +
            "FROM Payment p " +
            "GROUP BY YEAR(p.paymentDate)")
    List<Object> paymentTotalPerYear();

}
