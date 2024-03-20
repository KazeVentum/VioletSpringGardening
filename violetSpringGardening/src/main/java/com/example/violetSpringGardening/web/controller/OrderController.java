package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.OfficeServiceImpl;
import com.example.violetSpringGardening.domain.service.OrderServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Order;
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
public class OrderController {
    private final OrderServiceImpl orderService;

    @Autowired
    public OrderController(OrderServiceImpl orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders/all")
    public List<Order> getAllOrders(){return orderService.getAll();}

    @GetMapping("/orderByStatus")
    public List<Object> orderByStatus(){return orderService.orderByStatus();}


    @GetMapping("/orderStatus")
    public List<Object> orderStatus(){return orderService.orderStatus();}

    @GetMapping("/lateOrders")
    public List<Object> lateOrders(){return orderService.lateOrders();}

    @GetMapping("/ordersRejectedInYear")
    public List<Object> ordersRejectedInYear(@RequestParam String year){return orderService.ordersRejectedInYear(year);}

    //@GetMapping("/ordersByYear")
    //public List<Object> ordersByYear(@RequestParam String year){return orderService.ordersByYear(year);}

}
