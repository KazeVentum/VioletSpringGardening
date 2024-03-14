package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository <Payment, Long> {
}
