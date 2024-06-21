package com.gruppe2.healthify;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@Import(TestcontainersConfiguration.class)
@SpringBootTest
class HealthifyApplicationTests {

	@Test
	void contextLoads() {
	}

}
