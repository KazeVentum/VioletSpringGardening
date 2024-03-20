package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.ProductServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Customer;
import com.example.violetSpringGardening.persistence.entity.Product;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("https://localhost:8080")
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class ProductController {
    private final ProductServiceImpl productService;

    @Autowired
    public ProductController(ProductServiceImpl productService) {
        this.productService = productService;
    }


    @GetMapping("/products/all")
    public List<Product> getAllProducts(){ return productService.getAll();}

    @GetMapping("/productsWithoutOrder")
    public List<Object> productsWithoutOrder(){return productService.productsWithoutOrder();}

    @GetMapping("/productsWithoutOrdersDescription")
    public List<Object> productsWithoutOrdersDescription(){return productService.productsWithoutOrdersDescription();}

    @GetMapping("/varietyOfProductsInOrders")
    public List<Object> varietyOfProductsInOrders(){return productService.varietyOfProductsInOrders();}

    @GetMapping("/totalProductsByOrder")
    public List<Object> totalProductsByOrder(){return productService.totalProductsByOrder();}

    @GetMapping("/bestSellers")
    public List<Object> bestSellers(){return productService.bestSellers();}
}
