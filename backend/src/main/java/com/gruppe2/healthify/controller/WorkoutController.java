package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import com.gruppe2.healthify.service.UserService;
import com.gruppe2.healthify.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/workouts")
public class WorkoutController {

    @Autowired
    private UserService userService;

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    @GetMapping("/username/{username}")
    public List<Workout> getWorkoutsForUser(@PathVariable String username) {
        System.out.println("Received request to get workouts for username: " + username);
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            System.out.println("User found: " + user.getUsername());
            return workoutRepository.findByUser(user);
        } else {
            System.out.println("User not found for username: " + username);
            throw new RuntimeException("User not found");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Workout>> getAllWorkouts() {
        List<Workout> workout = workoutService.findAll();
        return ResponseEntity.ok(workout);
    }

    @PostMapping("/send-email")
    public String sendWorkoutsByEmail(@RequestParam Long userId) {
        System.out.println("Received request to send email for userId: " + userId);
        Optional<User> optionalUser = userRepository.findById(userId);
        if(optionalUser.isPresent()) {
            User user = optionalUser.get();
            System.out.println("User found: " + user.getUsername());
            workoutService.sendWorkoutsByEmail(user, "mail@paulkeck.de");
            return "Email sent successfully";
        } else {
            System.out.println("User not found for userId: " + userId);
            throw new RuntimeException("User not found");
        }
    }
}
