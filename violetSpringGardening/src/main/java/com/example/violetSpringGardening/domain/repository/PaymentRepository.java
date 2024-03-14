package com.example.violetSpringGardening.domain.repository;


import com.example.violetSpringGardening.persistence.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, String> {
}
