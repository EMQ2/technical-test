package com.example.backendapplication.controller;

import com.example.backendapplication.model.Task;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@Tag(name = "Tasks", description = "Task management")
@RequestMapping("/tasks")
@RequiredArgsConstructor
@RestController
public class TaskController {

    @Operation(summary = "Get all tasks")
    @GetMapping("/")
    public ResponseEntity<List<Task>> getTasks() {
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Create a task")
    @PostMapping("/task")
    public ResponseEntity<Task> createTask() {
        throw new RuntimeException("Not implemented");
    }

    /*
     * Implement the following endpoints:
     */

    @Operation(summary = "Get a task by ID")
    @GetMapping("/task/{id}")
    public ResponseEntity<Void> getTask(UUID id) {
        // TODO: Implement me
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Update a task")
    @PostMapping("/task/{id}")
    public ResponseEntity<Void> updateTask(UUID id) {
        // TODO: Implement me
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Delete a task")
    @DeleteMapping("/task/{id}")
    public ResponseEntity<Void> deleteTask(UUID id) {
        // TODO: Implement me
        throw new RuntimeException("Not implemented");
    }
}
