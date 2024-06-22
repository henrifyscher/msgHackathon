package com.gruppe2.healthify.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "workouts")
@Data
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private LocalDate date;

    @ManyToMany
    @JoinTable(
            name = "workout_exercises",
            joinColumns = @JoinColumn(name = "workout_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    private List<Exercise> exercises;

    public Workout(){}

    public Workout(User user, LocalDate date, List<Exercise> exercises) {
        this.user = user;
        this.date = date;
        this.exercises = exercises;
    }
}
