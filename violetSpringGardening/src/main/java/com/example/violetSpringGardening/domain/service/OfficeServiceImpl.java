package com.example.violetSpringGardening.domain.service;


import com.example.violetSpringGardening.domain.repository.OfficeRepository;
import com.example.violetSpringGardening.persistence.entity.Office;
import com.example.violetSpringGardening.persistence.entity.dtos.OfficeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfficeServiceImpl implements ServiceInterface<OfficeDTO>{
    private final OfficeRepository officeRepository;

    @Autowired
    public OfficeServiceImpl(OfficeRepository officeRepository) {
        this.officeRepository = officeRepository;
    }


    @Override
    public List<OfficeDTO> getAll() {
        return officeRepository.findAll().stream()
                .map(Office::toDTO)
                .toList();
    }
}
