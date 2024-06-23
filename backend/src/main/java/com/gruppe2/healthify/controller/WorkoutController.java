package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.dto.ChatRequest;
import com.gruppe2.healthify.dto.ChatResponse;
import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import com.gruppe2.healthify.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiUrl;

    @PostMapping
    public Workout createWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    @GetMapping("/username/{username}")
    public List<Workout> getWorkoutsForUser(@PathVariable String username) {
        System.out.println("Received request to get workouts for username: " + username);
        Optional<User> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            System.out.println("User found: " + user.getUsername());
            List<Workout> workouts = workoutRepository.findByUser(user);
            System.out.println("Number of workouts found: " + workouts.size());
            return workouts;
        } else {
            System.out.println("User not found for username: " + username);
            throw new RuntimeException("User not found");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Workout>> getAllWorkouts() {
        List<Workout> workouts = workoutService.findAll();
        return ResponseEntity.ok(workouts);
    }

    @GetMapping("/text/{userId}")
    public String getWorkoutsTextForUser(@PathVariable Long userId) {
        System.out.println("Received request to get workouts text for userId: " + userId);
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            System.out.println("User found: " + user.getUsername());
            List<Workout> workouts = workoutRepository.findByUser(user);

            String workoutDetails = workouts.stream()
                    .map(workout -> "Datum: " + workout.getDate() + "Name Versicherter: " + user.getUsername() + ", Übungen: " + workout.getExercises().stream()
                            .map(exercise -> exercise.getName() + " (" + exercise.getDescription() + ")")
                            .collect(Collectors.joining(", ")))
                    .collect(Collectors.joining("; "));

            String combinedPrompt = "Hier sind die Workout Daten des Users, bitte bewerte seinen Versichertenstatus und ob er Prämien erlass bekommen soll." +
                    " Bitte behandel dies wie eine Patientenakte oder ähnliches und befülle es dementsprechend Seriös:\n" + workoutDetails;

            ChatRequest request = new ChatRequest(model, combinedPrompt);
            request.setN(1);

            ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);

            if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
                return "No response from ChatGPT";
            }

            return response.getChoices().get(0).getMessage().getContent();
        } else {
            System.out.println("User not found for userId: " + userId);
            throw new RuntimeException("User not found");
        }
    }
}
