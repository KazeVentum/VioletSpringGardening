package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.ProductRangeRepository;
import com.example.violetSpringGardening.persistence.entity.ProductRange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductRangeServiceImpl implements ServiceInterface<ProductRange>{
    private final ProductRangeRepository productRangeRepository;

    @Autowired
    public ProductRangeServiceImpl(ProductRangeRepository productRangeRepository) {
        this.productRangeRepository = productRangeRepository;
    }


    //methods
    @Override
    public List<ProductRange> getAll() {
        return productRangeRepository.findAll();
    }

//    public List<Object> productRangesWithEachCustomer(){return productRangeRepository.productRangesWithEachCustomer();}
}
