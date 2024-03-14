package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.OrderRepository;
import com.example.violetSpringGardening.persistence.entity.Order;
import com.example.violetSpringGardening.persistence.entity.dtos.OrderDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements ServiceInterface<OrderDTO>{

    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }


    @Override
    public List<OrderDTO> getAll() {
        return orderRepository.findAll().stream()
                .map(Order::toDTO)
                .toList();
    }
}
