package com.gruppe2.healthify.repository;

import com.gruppe2.healthify.entity.Exercise;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {
   @Override
   List<Exercise> findAll();
   List<Exercise> findByNameStartsWith(String name);
}
