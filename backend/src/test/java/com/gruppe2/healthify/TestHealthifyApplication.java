package com.gruppe2.healthify;

import org.springframework.boot.SpringApplication;

public class TestHealthifyApplication {

	public static void main(String[] args) {
		SpringApplication.from(HealthifyApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
