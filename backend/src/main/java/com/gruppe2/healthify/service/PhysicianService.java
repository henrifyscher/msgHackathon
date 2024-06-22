package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Physician;
import com.gruppe2.healthify.repository.PhysicianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PhysicianService {
    @Autowired
    private PhysicianRepository physicianRepository;

    public Optional<Physician> findByUsername(String username) {
        return physicianRepository.findByUsername(username);
    }

    public Physician savePhysician(Physician physician) {
        return physicianRepository.save(physician);
    }
}
