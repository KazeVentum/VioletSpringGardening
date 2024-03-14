package com.example.violetSpringGardening.domain.repository;


import com.example.violetSpringGardening.persistence.entity.GamaProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GamaProductRepository extends JpaRepository<GamaProduct, String> {
}
