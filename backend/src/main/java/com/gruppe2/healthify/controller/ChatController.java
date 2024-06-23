package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.dto.ChatRequest;
import com.gruppe2.healthify.dto.ChatResponse;
import com.gruppe2.healthify.entity.Workout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import com.gruppe2.healthify.service.WorkoutService;

import java.util.List;
import java.util.stream.Collectors;


@RestController
public class ChatController {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private WorkoutService workoutService;

    @Value("${openai.model}")
    private String model;

    @Value("${openai.api.url}")
    private String apiUrl;

    @GetMapping("/chat")
    public String chat(@RequestParam String prompt, @RequestParam(defaultValue = "1") int n) {
        ChatRequest request = new ChatRequest(model, prompt);
        request.setN(n);

        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);

        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }

        return response.getChoices().get(0).getMessage().getContent();
    }

    @GetMapping("/chat/workouts")
    public String chatWithWorkouts(@RequestParam Long userId, @RequestParam String prompt) {
        List<Workout> workouts = workoutService.getWorkoutsByUserId(userId);

        String workoutDetails = workouts.stream()
                .map(workout -> "Date: " + workout.getDate() + ", Exercises: " + workout.getExercises().stream()
                        .map(exercise -> exercise.getName() + " (" + exercise.getDescription() + ")")
                        .collect(Collectors.joining(", ")))
                .collect(Collectors.joining("; "));

        String combinedPrompt = prompt + "\n\nUser Workouts:\n" + workoutDetails;

        ChatRequest request = new ChatRequest(model, combinedPrompt);
        request.setN(1);

        ChatResponse response = restTemplate.postForObject(apiUrl, request, ChatResponse.class);

        if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
            return "No response";
        }

        return response.getChoices().get(0).getMessage().getContent();
    }

}
