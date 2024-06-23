package com.gruppe2.healthify.dto;

import com.gruppe2.healthify.entity.Workout;
import lombok.Data;

import java.util.List;

@Data
public class DataSummary {
    private List<Workout> workouts;

    public DataSummary(List<Workout> workouts) {
        this.workouts = workouts;
    }
}