package com.example.violetSpringGardening.web.controller;


import com.example.violetSpringGardening.domain.service.ServiceInterface;
import com.example.violetSpringGardening.persistence.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
@RequestMapping("/register")
public class AdminController {
    private final ServiceInterface serviceInterface;

    @Autowired
    public AdminController(ServiceInterface serviceInterface) {
        this.serviceInterface = serviceInterface;
    }
    @GetMapping
    public List<Admin> getAllAdmins(){
        return serviceInterface.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Object id) {
        return serviceInterface.getById(id);
    }

    @PostMapping
    public ResponseEntity<Admin> saveAdmin(@RequestBody Admin adminSave) {
        return serviceInterface.save(adminSave);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        return serviceInterface.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin( @PathVariable Object id, @RequestBody Admin adminUpdate) {
        return serviceInterface.update(id, adminUpdate);
    }

}
