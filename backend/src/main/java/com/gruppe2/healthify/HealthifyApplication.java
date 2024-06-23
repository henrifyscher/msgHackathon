package com.gruppe2.healthify;

import com.gruppe2.healthify.service.ExerciseService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HealthifyApplication {

	@Autowired
	private ExerciseService exerciseService;

	public static void main(String[] args) {
		SpringApplication.run(HealthifyApplication.class, args);
	}

}

