package com.example.backendapplication.service.impl;

import com.example.backendapplication.exceptions.TaskNotFoundException;
import com.example.backendapplication.model.Task;
import com.example.backendapplication.repository.TaskRepository;
import com.example.backendapplication.service.ITaskService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class TaskService implements ITaskService {

    private final TaskRepository taskRepository;

    @Override
    public Page<Task> getAllTasks(Pageable page) {
        return taskRepository.findAll(page);
    }

    @Override
    public Task createTask(String title, String description) {
        Date date = new Date();
        log.info("Creating task with title {} and description {} on {}", title, description, date);
        Task task = Task.builder().name(title).details(description).createdDate(date).updatedDate(date).build();

        return taskRepository.save(task);
    }

    @Override
    public Task toggleTaskCompletion(UUID taskId) throws TaskNotFoundException {
        Task task = taskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        task.setCompleted(!task.isCompleted());
        return taskRepository.save(task);
    }

    /*
    * Sample Solutions Below
     */

    @Override
    public Task getTaskById(UUID taskId) throws TaskNotFoundException {
        Task task = taskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        return task;
    }

    @Override
    public Task updateTask(UUID taskId, String title, String description) throws TaskNotFoundException {
        Task task = taskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        task.setName(title);
        task.setDetails(description);
        task.setUpdatedDate(new Date());

        return taskRepository.save(task);
    }

    @Override
    public boolean deleteTask(UUID taskId) throws TaskNotFoundException {
        Task task = taskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        taskRepository.delete(task);
        return true;
    }
}
