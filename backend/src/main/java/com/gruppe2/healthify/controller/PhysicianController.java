package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.entity.Physician;
import com.gruppe2.healthify.service.PhysicianService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/physicians")
public class PhysicianController {
    @Autowired
    private PhysicianService physicianService;

    @PostMapping
    public Physician createUser(@RequestBody Physician physician) {
        return physicianService.savePhysician(physician);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Physician> getPhysician(@PathVariable String username) {
        return physicianService.findByUsername(username)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
