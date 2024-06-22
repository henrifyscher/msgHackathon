package com.gruppe2.healthify.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "physicians")
@Data
public class Physician {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String specialization;

}