package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.ProductRange;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRangeRepository extends JpaRepository <ProductRange, Long> {
}
