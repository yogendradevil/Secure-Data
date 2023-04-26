package com.secureRest.secureData.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MyController {
//make a function which takes string as an input and returns two output a and b which is first and second half of the encryption

    @PostMapping("/process-string")
    public ResponseEntity<Map<String, String>> processString(@RequestBody String input) {
        // process input string and return two output strings

        // create response map with output strings
        Map<String, String> response = new HashMap<>();
        response.put("output1", input);
        response.put("output2", input);

        // return response with HTTP status 200 OK
        return ResponseEntity.ok(response);
    }


    @PostMapping("/process-two-strings")
    public ResponseEntity<String> processTwoStrings(@RequestBody Map<String, String> inputs) {
        // process input strings and return output string
        String input1 = inputs.get("input1");
        String input2 = inputs.get("input2");
        String output = input1 + " " + input2;

        // return output with HTTP status 200 OK
        return ResponseEntity.ok(output);
    }

}
