package com.gruppe2.healthify.service;

import com.gruppe2.healthify.entity.User;
import com.gruppe2.healthify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void createUser(String name, String email, String password) {
        userRepository.save(new User(name, email, password));
    }

    public void initUsers(){
        Set<User> users = Set.of(
                new User("FZierer", "flozierer@gmail.com", "lol42"),
                new User("JSample", "jsample@gmail.com", "password123"),
                new User("AMuster", "amuster@gmail.com", "passwort456"),
                new User("BSmith", "bsmith@gmail.com", "securepass"),
                new User("CDoe", "cdoe@gmail.com", "doepass"),
                new User("EJäger", "ejaeger@gmail.com", "hunter2"),
                new User("FMüller", "fmueller@gmail.com", "müller123"),
                new User("GHansen", "ghansen@gmail.com", "hansenpass"),
                new User("IKlein", "iklein@gmail.com", "kleinpass"),
                new User("JSchmidt", "jschmidt@gmail.com", "schmidt123")
        );
        userRepository.saveAll(users);
    }

    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

}
