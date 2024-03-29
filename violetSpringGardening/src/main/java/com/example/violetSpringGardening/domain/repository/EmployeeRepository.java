package com.example.violetSpringGardening.domain.repository;

import com.example.violetSpringGardening.persistence.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {

    // Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes
    @Query("SELECT e.name AS nombreEmpleado, j.name AS nombreJefe " +
            "FROM Employee e " +
            "LEFT JOIN e.boss j")
    List<Object> employeesWithTheirBoss();

    // Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
    @Query("SELECT CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) AS nombreEmpleado, " +
            "       CONCAT(j.name, ' ', j.lastName1, ' ', j.lastName2) AS nombreJefe, " +
            "       CONCAT(j2.name, ' ', j2.lastName1, ' ', j2.lastName2) AS nombreJefeDelJefe " +
            "FROM Employee e " +
            "JOIN e.boss j " +
            "JOIN j.boss j2")
    List<Object> employeesWithTheBossOfTheirBoss();


    // Devuelve un listado que muestre solamente los empleados que no tienen una oficina asociada.
    @Query("SELECT e " +
            "FROM Employee e " +
            "WHERE e.office IS NULL")
    List<Object> employeesWithoutOffice();


    // Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado.
    @Query("SELECT e " +
            "FROM Employee e " +
            "WHERE e.office IS NULL")
    List<Object> employeesWithoutCustomer();


    // Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado junto con los datos de la oficina donde trabajan.
    @Query("SELECT e.name, e.lastName1, o.officeCode ,o.city, o.country " +
            "FROM Employee e " +
            "JOIN e.office o " +
            "WHERE NOT EXISTS (SELECT 1 FROM Customer c WHERE c.repSales = e)")
    List<Object> employeesOfficeWithoutCustomer();


    // Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
    @Query("(SELECT e.name, e.lastName1, e.lastName2, NULL " +
            "FROM Employee e " +
            "WHERE e.office IS NULL) " +
            "UNION " +
            "(SELECT e.name, e.lastName1,e.lastName2, NULL " +
            "FROM Employee e " +
            "WHERE NOT EXISTS (SELECT 1 FROM Customer c WHERE c.repSales = e))")
    List<Object> employeesWithoutOfficeAndCustomer();


    // Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado.

    @Query("SELECT e.name, e.lastName1, j.name, j.lastName1 " +
            "FROM Employee e " +
            "LEFT JOIN e.boss j " +
            "WHERE NOT EXISTS (SELECT 1 FROM Customer c WHERE c.repSales = e)")
    List<Object> employeesWithoutCustomersBoss();


    // Devuelve el nombre de los representantes de ventas y el número de clientes al que atiende cada uno.
    @Query("SELECT e.name, COUNT(c) " +
            "FROM Employee e " +
            "LEFT JOIN e.customers c " +
            "GROUP BY e.name")
    List<Object> totalCustomersPerSalesRep();



    // ¿Cuántos empleados hay en la compañía? // NO esta en controller
    long count();


    // Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
    List<Employee> findAllByChargeNotLike(String charge); //objeto completo // NO esta en controller


    // Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7. NO esta en controller
    @Query("SELECT e.name, e.lastName1, e.lastName2 FROM Employee e WHERE e.boss.employeeCode = :bossCode")
    List<Object> findNameLastnameByBoss(int bossCode);


    // Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
    @Query("SELECT e.name, e.lastName1, e.lastName2, e.email, e.charge FROM Employee e WHERE e.boss.employeeCode IS NULL")
    List<Object> findCompanyBoss();




}
