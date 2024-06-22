package com.gruppe2.healthify.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "exercises")
@Data
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String description;
    private int difficultyLevel;

    public Exercise() {}

    public Exercise(String name, String description, int difficultyLevel) {
        this.name = name;
        this.description = description;
        this.difficultyLevel = difficultyLevel;
    }
}
