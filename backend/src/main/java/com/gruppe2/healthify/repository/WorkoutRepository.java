package com.gruppe2.healthify.repository;

import com.gruppe2.healthify.entity.Workout;
import com.gruppe2.healthify.entity.User;
import lombok.Data;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface WorkoutRepository extends CrudRepository<Workout, Long> {
    List<Workout> findByUserAndDate(User user, LocalDate date);
    List<Workout> findByUser(User user);

}
