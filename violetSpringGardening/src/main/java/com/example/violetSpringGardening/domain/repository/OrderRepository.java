package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository <Order, Long> {
}
