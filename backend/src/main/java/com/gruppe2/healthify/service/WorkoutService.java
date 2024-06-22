package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    @Autowired
    private UserRepository userRepository;

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




}
