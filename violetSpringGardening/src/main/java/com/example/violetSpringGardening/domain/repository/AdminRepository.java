package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository <Admin, Long> {
}
