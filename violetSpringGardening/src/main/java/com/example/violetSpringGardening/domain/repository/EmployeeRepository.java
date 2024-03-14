package com.example.violetSpringGardening.domain.repository;


import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Integer> {
}
