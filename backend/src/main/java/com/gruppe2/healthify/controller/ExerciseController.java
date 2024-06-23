package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.entity.Exercise;
import com.gruppe2.healthify.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exercises")
public class ExerciseController {
    @Autowired
    private ExerciseService exerciseService;

    @PostMapping
    public Exercise createExercise(@RequestBody Exercise exercise) {
        return exerciseService.saveExercise(exercise);
    }

    @GetMapping
    public List<Exercise> getAllExercises() {
        return exerciseService.getAllExercises();
    }

    @GetMapping("/search")
    public List<Exercise> searchExercises(@RequestParam String query) {
        return exerciseService.flexiSearch(query);
    }

    @PostMapping("/init")
    public String initExercises() {
        exerciseService.initExercises();
        return "Exercises initialized";
    }
}
