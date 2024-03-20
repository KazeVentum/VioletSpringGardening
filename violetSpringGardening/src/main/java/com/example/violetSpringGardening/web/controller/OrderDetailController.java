package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.OrderDetailServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Customer;
import com.example.violetSpringGardening.persistence.entity.OrderDetail;
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
public class OrderDetailController {
    private final OrderDetailServiceImpl orderDetailService;

    @Autowired
    public OrderDetailController(OrderDetailServiceImpl orderDetailService) {
        this.orderDetailService = orderDetailService;
    }

    @GetMapping("/orderdetails/all")
    public List<OrderDetail> getAllOrderDetails(){ return orderDetailService.getAll();}
}
