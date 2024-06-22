package com.gruppe2.healthify.service;

import com.gruppe2.healthify.dto.DataSummary;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DataSummaryService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    public DataSummary getUserSummary(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new DataSummary(workoutRepository.findByUser(user));
    }
}