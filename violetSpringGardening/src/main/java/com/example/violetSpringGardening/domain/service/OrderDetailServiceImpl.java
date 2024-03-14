package com.example.violetSpringGardening.domain.service;


import com.example.violetSpringGardening.domain.repository.OrderDetailRepository;
import com.example.violetSpringGardening.persistence.entity.dtos.OrderDetailDTO;
import com.example.violetSpringGardening.persistence.entity.orderdetail.OrderDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements ServiceInterface<OrderDetailDTO>{

    private final OrderDetailRepository orderDetailRepository;

    @Autowired
    public OrderDetailServiceImpl(OrderDetailRepository orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
    }


    @Override
    public List<OrderDetailDTO> getAll() {
        return orderDetailRepository.findAll().stream()
                .map(OrderDetail::toDTO)
                .toList();
    }
}
