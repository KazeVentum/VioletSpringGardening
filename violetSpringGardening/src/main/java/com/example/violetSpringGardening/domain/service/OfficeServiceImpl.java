package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.OfficeRepository;
import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfficeServiceImpl implements ServiceInterface<Office> {
    private final OfficeRepository officeRepository;

    @Autowired
    public OfficeServiceImpl(OfficeRepository officeRepository) {
        this.officeRepository = officeRepository;
    }


    //methods
    @Override
    public List<Office> getAll() {
        return officeRepository.findAll();
    }

    public List<Object> officesWithClientsInSpecificCity(String cityName){return officeRepository.officesWithClientsInSpecificCity(cityName);}

//    public List<Object> officesWithoutSalesRepByRange(String productRange){return officeRepository.officesWithoutSalesRepByRange(productRange);}
}
