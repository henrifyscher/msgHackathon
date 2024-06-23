package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.entity.Exercise;
import com.gruppe2.healthify.repository.ExerciseRepository;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private GuerillaMailService mailService;

    // Parameters for Workout -Mock data
    int numberOfWorkout = 5;
    int dayRange = 30;
    int numberOfExercises = 6;

    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public List<Workout> getWorkoutsByUserId(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        return user.map(workoutRepository::findByUser).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public void initWorkouts() {
        LocalDate today = LocalDate.now();
        List<User> users = userRepository.findAll();
        List<Exercise> exercises = exerciseRepository.findAll();
        Random random = new Random();

        Set<Workout> workouts = IntStream.range(0, numberOfWorkout)
                .mapToObj(i -> {
                    LocalDate randomDate = today.minusDays(random.nextInt(dayRange)); // Random date between today and 30 days ago
                    List<Exercise> randomExercises = random.ints(numberOfExercises, 0, exercises.size())
                            .mapToObj(exercises::get)
                            .collect(Collectors.toList());
                    User user = users.get(i % users.size());
                    return new Workout(user, randomDate, randomExercises);
                })
                .collect(Collectors.toSet());

        workoutRepository.saveAll(workouts);
    }

    public List<Workout> findAll() {
        return (List<Workout>) workoutRepository.findAll();
    }

    public void sendWorkoutsByEmail(User user, String toEmail) {
        System.out.println("Preparing to send workouts by email for user: " + user.getUsername());
        List<Workout> workouts = workoutRepository.findByUser(user);
        StringBuilder emailBody = new StringBuilder();
        emailBody.append("Here are your workouts:\n\n");

        for (Workout workout : workouts) {
            emailBody.append("Workout ID: ").append(workout.getId()).append("\n");
            emailBody.append("Exercises:\n");
            workout.getExercises().forEach(exercise ->
                    emailBody.append("- ").append(exercise.getName()).append("\n")
            );
            emailBody.append("\n");
        }

        mailService.sendMail(toEmail, "Your Workouts", emailBody.toString());
        System.out.println("Email sent successfully to " + toEmail);
    }
}
