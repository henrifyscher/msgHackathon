package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Exercise;
import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.ExerciseRepository;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
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

    // Parameters for Workout -Mock data
    int numberOfWorkout = 5;
    int dayRange = 30;
    int numberOfExercises = 6;

    public List<Workout> getWorkoutsForUserOnDate(User user, LocalDate date) {
        return workoutRepository.findByUserAndDate(user, date);
    }

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



}
