package com.gruppe2.healthify.repository;

import com.gruppe2.healthify.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Override
    List<User> findAll();
    Optional<User> findByUsername(String username);
}
