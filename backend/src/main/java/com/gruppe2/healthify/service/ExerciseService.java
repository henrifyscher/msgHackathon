package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.Exercise;
import com.gruppe2.healthify.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    public void initExercises() {
        List<Exercise> exercises = List.of(
                new Exercise("Bankdrücken", "Eine Übung für die Brustmuskulatur.", 3),
                new Exercise("Kniebeugen", "Übung für die Beinmuskulatur", 4),
                new Exercise("Kreuzheben", "Übung für den unteren Rücken", 5),
                new Exercise("Schulterdrücken", "Übung für die Schultermuskulatur", 3),
                new Exercise("Bizepscurls", "Übung für den Bizeps", 2),
                new Exercise("Trizepsdrücken", "Übung für den Trizeps", 2),
                new Exercise("Klimmzüge", "Übung für den oberen Rücken", 4),
                new Exercise("Rudern", "Übung für den mittleren Rücken", 3),
                new Exercise("Beinpressen", "Übung für die Beinmuskulatur", 4),
                new Exercise("Wadenheben", "Übung für die Wadenmuskulatur", 2)
        );
        exerciseRepository.saveAll(exercises);
    }

    public Exercise saveExercise(Exercise exercise) {
        return exerciseRepository.save(exercise);
    }

    public List<Exercise> getAllExercises() {
        return (List<Exercise>) exerciseRepository.findAll();
    }

    public List<Exercise> flexiSearch(String query) {
        return exerciseRepository.findByNameStartsWith(query)
                .stream()
                .limit(5)
                .toList();
    }
}
