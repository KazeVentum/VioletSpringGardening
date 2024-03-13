package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.persistence.entity.Admin;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AdminService {
    List<Admin> getAllAdmins();
    ResponseEntity<Admin> getAdminById(Object id);
    ResponseEntity<Admin> saveAdmin(Admin adminSave);
    ResponseEntity<Void> deleteAdmin(Long id);
    ResponseEntity<Admin> updateAdmin(Object id, Admin adminUpdate);
}
