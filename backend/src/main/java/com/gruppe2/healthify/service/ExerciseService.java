package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Exercise;
import com.gruppe2.healthify.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    public Exercise saveExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    //TODO  FlexiSearch (Ergo kp 3 chars und dann auswahl an 5 koressponding exercises zurückgeben)

    //TODO  init func welche bei starup ka. 10 exercises reinschreibt

    //TODO

}
