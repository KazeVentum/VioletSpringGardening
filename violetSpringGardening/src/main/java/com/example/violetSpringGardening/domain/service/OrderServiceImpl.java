package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.OrderRepository;
import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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

    public List<Object> orderByCity(){return orderRepository.orderByCity();}
}
