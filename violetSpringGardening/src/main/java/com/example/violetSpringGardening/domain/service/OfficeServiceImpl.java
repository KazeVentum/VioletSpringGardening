package com.example.violetSpringGardening.domain.service;

import com.example.violetSpringGardening.domain.repository.OfficeRepository;
import com.example.violetSpringGardening.persistence.entity.Office;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class OfficeServiceImpl implements ServiceInterface<Office> {
    private final OfficeRepository officeRepository;

    @Autowired
    public OfficeServiceImpl(OfficeRepository officeRepository) {
        this.officeRepository = officeRepository;
    }

    @Override
    public List<Office> getAll() {
        return officeRepository.findAll();
    }
}