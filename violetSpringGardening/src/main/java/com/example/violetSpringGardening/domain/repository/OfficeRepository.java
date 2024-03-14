package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfficeRepository extends JpaRepository <Office, Long> {
}
