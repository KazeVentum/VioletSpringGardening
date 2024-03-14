package com.example.violetSpringGardening.domain.repository;


import com.example.violetSpringGardening.persistence.entity.orderdetail.OrderDetail;
import com.example.violetSpringGardening.persistence.entity.orderdetail.OrderDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {
}
