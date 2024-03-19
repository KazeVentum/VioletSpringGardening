package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.OfficeServiceImpl;
import com.example.violetSpringGardening.domain.service.OrderServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("https://localhost:8080")
public class OrderController {
    private final OrderServiceImpl orderService;

    @Autowired
    public OrderController(OrderServiceImpl orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders/all")
    public List<Order> getAllOrders(){return orderService.getAll();}

    @GetMapping("/orderByCity")
    public List<Object> orderByCity(){return orderService.orderByCity();}
}
