package com.example.violetSpringGardening.domain.service;


import com.example.violetSpringGardening.domain.repository.GamaProductRepository;
import com.example.violetSpringGardening.persistence.entity.GamaProduct;
import com.example.violetSpringGardening.persistence.entity.dtos.GamaProductDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductRangeServiceImpl implements ServiceInterface<GamaProductDTO>{
    final private GamaProductRepository gamaProductRepository;

    @Autowired
    public ProductRangeServiceImpl(GamaProductRepository gamaProductRepository) {
        this.gamaProductRepository = gamaProductRepository;
    }


    @Override
    public List<GamaProductDTO> getAll() {
        return gamaProductRepository.findAll().stream()
                .map(GamaProduct::toDTO)
                .toList();
    }
}
