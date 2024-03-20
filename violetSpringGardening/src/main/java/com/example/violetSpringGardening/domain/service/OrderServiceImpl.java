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

    public List<Object> orderByStatus(){return orderRepository.orderByStatus();}


    public List<Object> orderStatus(){return orderRepository.orderStatus();}

    public List<Object> lateOrders(){return orderRepository.lateOrders();}

    public List<Object> ordersRejectedInYear(String year){return orderRepository.ordersRejectedInYear(year);}

    //public List<Object> ordersByYear(String year){return orderRepository.ordersByYear(year);}
}
