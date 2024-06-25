// TODO: Proposed solution to remove
package com.example.backendapplication.service;

import com.example.backendapplication.exceptions.TaskNotFoundException;
import com.example.backendapplication.model.Subtask;
import com.example.backendapplication.model.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface ISubTaskService {
    Page<Subtask> getAllTasks(Pageable page, UUID parentTask);
    Subtask createTask(String title, String description, UUID parentTask) throws TaskNotFoundException;
    Subtask toggleTaskCompletion(UUID taskId) throws TaskNotFoundException;

    // Solution Steps
    Subtask getTaskById(UUID taskId) throws TaskNotFoundException;
    Subtask updateTask(UUID taskId, String title, String description) throws TaskNotFoundException;
    boolean deleteTask(UUID taskId) throws TaskNotFoundException;
}
