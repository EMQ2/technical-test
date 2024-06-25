package com.example.backendapplication.controller;

import com.example.backendapplication.exceptions.TaskNotFoundException;
import com.example.backendapplication.model.Subtask;
import com.example.backendapplication.model.Task;
import com.example.backendapplication.model.TaskCreationRequest;
import com.example.backendapplication.service.ISubTaskService;
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
@CrossOrigin
public class SubtaskController {

    // TODO: Solution to remove this variable
    // TODO: Update all controller return value from Subtask to Task as well
    private final ISubTaskService subTaskService;

    @Operation(summary = "Get all sub-tasks for a parent task")
    @GetMapping("/")
    public ResponseEntity<Page<Subtask>> getTasks(@RequestParam(value = "page", defaultValue = "0") Integer page,
                                                  @RequestParam(value = "size", defaultValue = "10") Integer size,
                                                  @RequestParam(value = "orderBy", defaultValue = "name") String orderBy,
                                                  @RequestParam(value = "direction", defaultValue = "ASC") String direction,
                                                  @RequestParam UUID parentTask) {
//        throw new RuntimeException("Not implemented");

        // TODO: Solution
        log.info("Getting all sub-tasks for parent task with ID {} with page {}, size {}, orderBy {}, direction {}", parentTask, page, size, orderBy, direction);
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(direction), orderBy));

        return ResponseEntity.ok(subTaskService.getAllTasks(pageable, parentTask));
    }

    @Operation(summary = "Create a sub-task")
    @PostMapping("/")
    public ResponseEntity<Subtask> createTask(@RequestBody @Valid TaskCreationRequest request, @RequestParam UUID parentTask) throws TaskNotFoundException {
//        throw new RuntimeException("Not implemented");

        // TODO: Solution

        log.info("Creating sub-task with name {} and details {} for parent task with ID {}", request.getName(), request.getDetails(), parentTask);
        return ResponseEntity.ok(subTaskService.createTask(request.getName(), request.getDetails(), parentTask));
    }

    @Operation(summary = "Toggle sub-task completion")
    @PutMapping("/{id}")
    public ResponseEntity<Subtask> toggleTaskCompletion(@PathVariable UUID id) throws TaskNotFoundException {
//        throw new RuntimeException("Not implemented");

        // TODO: Solution
        log.info("Toggling sub-task completion for sub-task with ID {}", id);
        return ResponseEntity.ok(subTaskService.toggleTaskCompletion(id));
    }

    @Operation(summary = "Get a sub-task by ID")
    @GetMapping("/{id}")
    public ResponseEntity<Subtask> getTask(@PathVariable UUID id) throws TaskNotFoundException {
//        throw new RuntimeException("Not implemented");

        // TODO: Solution
        return ResponseEntity.ok(subTaskService.getTaskById(id));
    }

    @Operation(summary = "Update a sub-task")
    @PostMapping("/{id}")
    public ResponseEntity<Subtask> updateTask(@PathVariable UUID id, @RequestBody @Valid TaskCreationRequest request) throws TaskNotFoundException {
//        throw new RuntimeException("Not implemented");

        // TODO: Solution
        return ResponseEntity.ok(subTaskService.updateTask(id, request.getName(), request.getDetails()));
    }

    @Operation(summary = "Delete a sub-task")
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteTask(@PathVariable UUID id) throws TaskNotFoundException {
//        throw new RuntimeException("Not implemented");

        // TODO: Solution
        return ResponseEntity.ok(subTaskService.deleteTask(id));
    }
}
