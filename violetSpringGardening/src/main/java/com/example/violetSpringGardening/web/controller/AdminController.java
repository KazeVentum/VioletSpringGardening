package com.example.violetSpringGardening.web.controller;


import com.example.violetSpringGardening.domain.service.AdminService;
import com.example.violetSpringGardening.persistence.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/register")
public class AdminController {
    private final AdminService adminService;

    @Autowired
    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }
    @GetMapping
    public List<Admin> getAllAdmins(){
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Object id) {
        return adminService.getAdminById(id);
    }

    @PostMapping
    public ResponseEntity<Admin> saveAdmin(@RequestBody Admin adminSave) {
        return adminService.saveAdmin(adminSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        return adminService.deleteAdmin(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin( @PathVariable Object id, @RequestBody Admin adminUpdate) {
        return adminService.updateAdmin(id, adminUpdate);
    }

}
