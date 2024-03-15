package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.ProductRepository;
import com.example.violetSpringGardening.persistence.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductServiceImpl implements ServiceInterface<Product>{
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }
}
