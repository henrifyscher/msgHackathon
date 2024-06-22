package com.gruppe2.healthify;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @GetMapping("/psing")
    public String ping() {
        return "Pong";
    }
}