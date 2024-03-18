package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.ProductRepository;
import com.example.violetSpringGardening.persistence.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ServiceInterface<Product>{
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    //methods
    @Override
    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public List<Object> productsWithoutOrder(){return productRepository.productsWithoutOrder();}

    public List<Object> productsWithoutOrdersDescription(){return productRepository.productsWithoutOrdersDescription();}

    //public List<Object> varietyOfProductsInOrders(){return productRepository.varietyOfProductsInOrders();}
}
