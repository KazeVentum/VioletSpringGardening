package com.example.violetSpringGardening.web.controller;

import com.example.violetSpringGardening.domain.service.OfficeServiceImpl;
import com.example.violetSpringGardening.persistence.entity.Office;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/violetspring")
@CrossOrigin("http://localhost:8080")
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class OfficeController {
    private final OfficeServiceImpl officeService;

    @Autowired
    public OfficeController(OfficeServiceImpl officeService) {
        this.officeService = officeService;
    }


    @GetMapping("/offices/all")
    public List<Office> getAllOffices(){return officeService.getAll();}

    @GetMapping("/officesWithClientsInSpecificCity")
    public List<Object> officesWithClientsInSpecificCity(@RequestParam String cityName){return officeService.officesWithClientsInSpecificCity(cityName);}

//    @GetMapping("/officesWithoutSalesRepByRange")
//    public List<Object> officesWithoutSalesRepByRange(@RequestParam String productRange){return officeService.officesWithoutSalesRepByRange(productRange);}

    @GetMapping("/findOfficeCodesAndCities")
    public List<Object> findOfficeCodesAndCities(){return officeService.findOfficeCodesAndCities();}
}
