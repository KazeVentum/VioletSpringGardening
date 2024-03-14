package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product, Long> {
}
