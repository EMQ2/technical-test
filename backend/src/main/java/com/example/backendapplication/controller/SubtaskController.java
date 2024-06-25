package com.example.backendapplication.controller;

import com.example.backendapplication.exceptions.TaskNotFoundException;
import com.example.backendapplication.model.Task;
import com.example.backendapplication.model.TaskCreationRequest;
import com.example.backendapplication.service.ITaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Tag(name = "Sub-Tasks", description = "Sub-Tasks management")
@RequestMapping("/subtasks")
@RequiredArgsConstructor
@RestController
@Slf4j
public class SubtaskController {

    @Operation(summary = "Get all subtasks for tasks")
    @GetMapping("/")
    public ResponseEntity<Page<Task>> getTasks(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                               @RequestParam(value = "size", defaultValue = "10") Integer size,
                                               @RequestParam(value = "orderBy", defaultValue = "name") String orderBy,
                                               @RequestParam(value = "direction", defaultValue = "ASC") String direction) {
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Create a sub-task")
    @PostMapping("/")
    public ResponseEntity<Task> createTask() {
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Toggle sub-task completion")
    @PutMapping("/{id}")
    public ResponseEntity<Task> toggleTaskCompletion(@PathVariable UUID id) {
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Get a task by ID")
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTask(@PathVariable UUID id) {
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Update a task")
    @PostMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable UUID id, @RequestBody @Valid TaskCreationRequest request) {
        throw new RuntimeException("Not implemented");
    }

    @Operation(summary = "Delete a task")
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteTask(@PathVariable UUID id) {
        throw new RuntimeException("Not implemented");
    }
}
