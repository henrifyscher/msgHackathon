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
                new User("FZierer","lol42", "flozierer@gmail.com"),
                new User("JSample", "password123", "jsample@gmail.com"),
                new User("AMuster", "passwort456", "amuster@gmail.com"),
                new User("BSmith","securepass", "bsmith@gmail.com"),
                new User("CDoe","doepass", "cdoe@gmail.com"),
                new User("EJäger","hunter2", "ejaeger@gmail.com"),
                new User("FMüller","müller123", "fmueller@gmail.com"),
                new User("GHansen","hansenpass", "ghansen@gmail.com"),
                new User("IKlein","kleinpass", "iklein@gmail.com"),
                new User("JSchmidt","schmidt123", "jschmidt@gmail.com")
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
