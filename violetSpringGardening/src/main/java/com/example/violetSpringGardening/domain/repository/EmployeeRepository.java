package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {
}
