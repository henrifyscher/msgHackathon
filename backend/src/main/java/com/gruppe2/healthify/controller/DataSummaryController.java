package com.gruppe2.healthify.controller;

import com.gruppe2.healthify.dto.DataSummary;
import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.repository.UserRepository;
import com.gruppe2.healthify.repository.WorkoutRepository;
import com.gruppe2.healthify.service.DataSummaryService;
import com.gruppe2.healthify.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/summary")
public class DataSummaryController {

    @Autowired
    private DataSummaryService dataSummaryService;

    @GetMapping("/{username}")
    public DataSummary getUserSummary(@PathVariable String username) {
        return dataSummaryService.getUserSummary(username);
    }
}