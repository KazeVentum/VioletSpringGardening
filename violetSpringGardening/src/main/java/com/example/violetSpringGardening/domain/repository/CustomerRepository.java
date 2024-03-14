package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository <Customer, Long> {
}
