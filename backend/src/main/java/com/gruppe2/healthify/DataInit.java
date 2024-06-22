package com.gruppe2.healthify;

import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.service.ExerciseService;
import com.gruppe2.healthify.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInit implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Autowired
    private ExerciseService exerciseService;

    @Override
    public void run(String... args) throws Exception {
        initUsers();
        initExercises();
    }

    private void initUsers() {
        userService.initUsers();
    }

    private void initExercises() {
        exerciseService.initExercises();
    }
}
