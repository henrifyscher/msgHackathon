package com.gruppe2.healthify.repository;

import com.gruppe2.healthify.entity.Physician;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PhysicianRepository extends CrudRepository<Physician, Long> {
    Optional<Physician> findByUsername(String username);
}
