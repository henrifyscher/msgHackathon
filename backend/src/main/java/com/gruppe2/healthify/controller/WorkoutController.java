package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/workouts")
public class WorkoutController {
    @Autowired
    private WorkoutService workoutService;

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    @GetMapping
    public List<Workout> getWorkoutsForUserOnDate(@RequestParam Long userId, @RequestParam String date) {
        User user = new User();
        user.setId(userId);
        LocalDate localDate = LocalDate.parse(date);
        return workoutService.getWorkoutsForUserOnDate(user, localDate);
    }
}