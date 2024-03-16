package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {

//    //8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes
//    @Query("SELECT e.name AS nombreEmpleado, j.name AS nombreJefe" +
//            "FROM Employee e" +
//            "LEFT JOIN e.boss j")
//    List<Object> employeesWithTheirBoss();
//
//
//    //9.Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
//    @Query("SELECT CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombreEmpleado," +
//            "       CONCAT(j.name, ' ', j.lastName1, ' ', j.lastName2) AS nombreJefe," +
//            "       CONCAT(j2.name, ' ', j2.lastName1, ' ', j2.lastName2) AS nombreJefeDelJefe" +
//            "FROM Employee e" +
//            "JOIN e.boss j" +
//            "JOIN j.boss j2")
//    List<Object> employeesWithTheBossOfTheirBoss();


}
