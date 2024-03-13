package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.exceptions.AdminIdNotFoundException;
import com.example.violetSpringGardening.domain.exceptions.AdminNotFoundException;
import com.example.violetSpringGardening.domain.repository.AdminRepository;
import com.example.violetSpringGardening.persistence.entity.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository){
        this.adminRepository = adminRepository;
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @Override
    public ResponseEntity<Admin> getAdminById(Object id) {
        try{
            Long  newId = Long.parseLong(id.toString());
            Admin optionalAdmin = adminRepository.findById(newId)
                    .orElseThrow(() -> new AdminNotFoundException("Admin no encontrado"));
            return ResponseEntity.ok(optionalAdmin);

        }catch (NumberFormatException e){
            throw new AdminIdNotFoundException("Haz ingresado una letra u/o otro caracter diferente a un Número de tipo Long");
        }
    }

    @Override
    public ResponseEntity<Admin> saveAdmin(Admin adminSave) {
        adminRepository.save(adminSave);
        return ResponseEntity.ok(adminSave);
    }

    @Override
    public ResponseEntity<Void> deleteAdmin(Long id) {
        if (adminRepository.existsById(id)) {
            adminRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Override
    public ResponseEntity<Admin> updateAdmin(Object id, Admin adminUpdate) {
        try{
            Long newId = Long.parseLong(id.toString());
            Optional<Admin> optionalAdmin = adminRepository.findById(newId);
            if(optionalAdmin.isPresent()){

                Admin adminSend = optionalAdmin.get();
                adminSend.setUsername(adminUpdate.getUsername());
                adminSend.setPassword(adminUpdate.getPassword());
                adminSend.setToken(adminUpdate.getToken());
                adminRepository.save(adminSend);

                return ResponseEntity.ok(adminSend);
            } else {
                throw new AdminNotFoundException("Admin no encontrado por dicho ID para actualizar");
            }
        }catch (NumberFormatException e){
            throw new AdminIdNotFoundException("Haz ingresado una letra u/o otro caracter diferente a un Número de tipo Long");
        }
    }
}
