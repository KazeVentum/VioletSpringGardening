package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.OrderRepository;
import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class OrderServiceImpl implements ServiceInterface<Order>{
    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAll() {
        return orderRepository.findAll();
    }
}
