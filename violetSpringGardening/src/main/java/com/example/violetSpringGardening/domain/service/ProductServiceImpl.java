package com.example.violetSpringGardening.domain.service;


import com.example.violetSpringGardening.domain.repository.ProductRepository;
import com.example.violetSpringGardening.persistence.entity.Product;
import com.example.violetSpringGardening.persistence.entity.dtos.ProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProductServiceImpl implements ServiceInterface<ProductDTO>{

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public List<ProductDTO> getAll() {
        return productRepository.findAll().stream()
                .map(Product::toDTO)
                .toList();
    }
}
