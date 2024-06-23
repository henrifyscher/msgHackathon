package com.gruppe2.healthify.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.Map;

@Service
public class GuerillaMailService {

    private static final String API_URL = "http://api.guerrillamail.com/ajax.php?f=send_email";

    public void sendMail(String to, String subject, String text) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        Map<String, String> params = new HashMap<>();
        params.put("to", to);
        params.put("subject", subject);
        params.put("body", text);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(params, headers);
        ResponseEntity<String> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, String.class);

        if (response.getStatusCode().is2xxSuccessful()) {
            System.out.println("Email sent successfully: " + response.getBody());
        } else {
            System.out.println("Failed to send email: " + response.getBody());
        }
    }
}
