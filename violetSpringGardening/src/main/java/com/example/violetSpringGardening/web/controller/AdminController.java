package com.example.violetSpringGardening.web.controller;


import com.example.violetSpringGardening.domain.service.AdminInterfaceImpl;
import com.example.violetSpringGardening.persistence.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/register")
public class AdminController {
    private final AdminInterfaceImpl adminInterfaceImpl;

    @Autowired
    public AdminController(AdminInterfaceImpl adminInterfaceImpl) {
        this.adminInterfaceImpl = adminInterfaceImpl;
    }
    @GetMapping
    public List<Admin> getAllAdmins(){
        return adminInterfaceImpl.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Object id) {
        return adminInterfaceImpl.getById(id);
    }

    @PostMapping
    public ResponseEntity<Admin> saveAdmin(@RequestBody Admin adminSave) {
        return adminInterfaceImpl.save(adminSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        return adminInterfaceImpl.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin( @PathVariable Object id, @RequestBody Admin adminUpdate) {
        return adminInterfaceImpl.update(id, adminUpdate);
    }

}
