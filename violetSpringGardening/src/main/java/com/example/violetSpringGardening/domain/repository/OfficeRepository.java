package com.example.violetSpringGardening.domain.repository;


import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeRepository extends JpaRepository<Office, String> {
}