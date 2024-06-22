package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> getWorkoutsForUserOnDate(User user, LocalDate date) {
        return workoutRepository.findByUserAndDate(user, date);
    }

    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }


}
