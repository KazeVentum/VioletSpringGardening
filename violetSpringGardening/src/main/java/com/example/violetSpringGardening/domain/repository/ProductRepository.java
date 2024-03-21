package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product, Long> {

    // Calcula la suma de la cantidad total de todos los productos que aparecen en cada uno de los pedidos.
    @Query("SELECT od.orderDetailId, SUM(od.quantity) FROM OrderDetail od GROUP BY od.orderDetailId")
    List<Object> totalProductsByOrder();


    // Devuelve un listado de los productos que nunca han aparecido en un pedido.
    @Query("SELECT p.name " +
            "FROM Product p " +
            "WHERE NOT EXISTS (SELECT 1 FROM OrderDetail od WHERE od.product = p)")
    List<Object> productsWithoutOrder();


    // Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.
    @Query("SELECT p.name, p.description " +
            "FROM Product p " +
            "WHERE NOT EXISTS (SELECT 1 FROM OrderDetail od WHERE od.product = p)")
    List<Object> productsWithoutOrderDescription();


    // Calcula el número de productos diferentes que hay en cada uno de los pedidos.
    @Query("SELECT o.orderCode, COUNT(DISTINCT od.product) " +
            "FROM OrderDetail od " +
            "JOIN od.order o " +
            "GROUP BY o.orderCode")
    List<Object> varietyOfProductsInOrders();


    //Devuelve un listado de los 20 productos más vendidos y el número total de unidades que se han vendido de cada uno. El listado deberá estar ordenado por el número total de unidades vendidas.
    @Query("SELECT od.product.productCode, " +
            "       SUM(od.quantity) AS totalUnitsSold " +
            "FROM OrderDetail od " +
            "GROUP BY od.product.productCode " +
            "ORDER BY totalUnitsSold DESC " +
            "LIMIT 20")
    List<Object> bestSellers();


    //Lista las ventas totales de los productos que hayan facturado más de 3000 euros. Se mostrará el nombre, unidades vendidas, total facturado y total facturado con impuestos (21% IVA).

    //Calcula el precio de venta del producto más caro y más barato en una misma consulta.
}

