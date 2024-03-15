package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.CustomerServiceImpl;
import com.example.violetSpringGardening.domain.service.ProductRangeServiceImpl;
import com.example.violetSpringGardening.persistence.entity.ProductRange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("https://localhost:8080")
public class ProductRangeController {
    private final ProductRangeServiceImpl productRangeService;

    @Autowired
    public ProductRangeController(ProductRangeServiceImpl productRangeService) {
        this.productRangeService = productRangeService;
    }


    @GetMapping("/productrange/all")
    public List<ProductRange> getAllProductRanges(){return productRangeService.getAll();}
}
