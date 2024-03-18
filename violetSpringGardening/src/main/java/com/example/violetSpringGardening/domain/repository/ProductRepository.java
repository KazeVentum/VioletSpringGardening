package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product, Long> {

    //19. Devuelve un listado de los productos que nunca han aparecido en un pedido.
    @Query("SELECT p " +
            "FROM Product p " +
            "WHERE NOT EXISTS (SELECT 1 FROM OrderDetail od WHERE od.product = p)")
    List<Object> productsWithoutOrder();


    //20. Devuelve un listado de los productos que nunca han aparecido en un pedido. El resultado debe mostrar el nombre, la descripción y la imagen del producto.
    @Query("SELECT p.name, p.description " +
            "FROM Product p " +
            "WHERE p NOT IN (SELECT od.product FROM OrderDetail od)")
    List<Object> productsWithoutOrdersDescription();

    //resumen
    //Calcula el número de productos diferentes que hay en cada uno de los pedidos.
//    @Query("SELECT o.orderCode, COUNT(DISTINCT od.product) " +
//            "FROM Order o " +
//            "JOIN o.orderDetails od " +
//            "GROUP BY o.orderCode")
//    List<Object> varietyOfProductsInOrders();
}

