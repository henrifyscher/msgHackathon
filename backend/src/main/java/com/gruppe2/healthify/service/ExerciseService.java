package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Exercise;
import com.gruppe2.healthify.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ExerciseService {

    exercise_search
    public void initExercises() {
        List<Exercise> exercises = Stream.of(
                        new Exercise("Bankdrücken","Eine Übung für die Brustmuskulatur.",3),
                        new Exercise("Kniebeugen", "Übung für die Beinmuskulatur", 4),
                        new Exercise("Kreuzheben", "Übung für den unteren Rücken", 5),
                        new Exercise("Schulterdrücken", "Übung für die Schultermuskulatur", 3),
                        new Exercise("Bizepscurls", "Übung für den Bizeps", 2),
                        new Exercise("Trizepsdrücken", "Übung für den Trizeps", 2),
                        new Exercise("Klimmzüge", "Übung für den oberen Rücken", 4),
                        new Exercise("Rudern", "Übung für den mittleren Rücken", 3),
                        new Exercise("Beinpressen", "Übung für die Beinmuskulatur", 4),
                        new Exercise("Wadenheben", "Übung für die Wadenmuskulatur", 2))
                .toList();
        exerciseRepository.saveAll(exercises);
    }
    @Autowired
    private ExerciseRepository exerciseRepository;

    public Exercise saveExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    //TODO  FlexiSearch (Ergo kp 3 chars und dann auswahl an 5 koressponding exercises zurückgeben)
 repos_und_entities

    List<Exercise> exercises;

    @Autowired
    private ExerciseRepository exerciseRepository;

    public List<Exercise> flexiSearch(String query) {
        return exerciseRepository.findByNameLike(query+"%")
                .stream()
                .limit(5)
                .toList();
    }
}

