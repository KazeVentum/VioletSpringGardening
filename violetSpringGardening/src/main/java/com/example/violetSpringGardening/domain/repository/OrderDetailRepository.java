package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
}
