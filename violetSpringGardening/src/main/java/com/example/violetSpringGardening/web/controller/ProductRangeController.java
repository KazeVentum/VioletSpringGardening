package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.CustomerServiceImpl;
import com.example.violetSpringGardening.domain.service.ProductRangeServiceImpl;
import com.example.violetSpringGardening.persistence.entity.ProductRange;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("https://localhost:8080")
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class ProductRangeController {
    private final ProductRangeServiceImpl productRangeService;

    @Autowired
    public ProductRangeController(ProductRangeServiceImpl productRangeService) {
        this.productRangeService = productRangeService;
    }


    @GetMapping("/productrange/all")
    public List<ProductRange> getAllProductRanges(){return productRangeService.getAll();}

//    @GetMapping("/productRangesWithEachCustomer")
//    public List<Object> productRangesWithEachCustomer(){return productRangeService.productRangesWithEachCustomer();}

    @GetMapping("/productsBySpecificRange")
    public List<Object> productsBySpecificRange(@RequestParam String specificRange){return productRangeService.productsBySpecificRange(specificRange);}
}
