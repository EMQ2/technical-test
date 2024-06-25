// TODO: Proposed Solution to remove
package com.example.backendapplication.service.impl;

import com.example.backendapplication.exceptions.TaskNotFoundException;
import com.example.backendapplication.model.Subtask;
import com.example.backendapplication.model.Task;
import com.example.backendapplication.repository.SubTaskRepository;
import com.example.backendapplication.repository.TaskRepository;
import com.example.backendapplication.service.ISubTaskService;
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
public class SubTaskService implements ISubTaskService {

    private final SubTaskRepository subTaskRepository;
    private final TaskRepository taskRepository;

    @Override
    public Page<Subtask> getAllTasks(Pageable page, UUID parentTask) {
        return subTaskRepository.findByParentId_Id(parentTask, page);
    }

    @Override
    public Subtask createTask(String title, String description, UUID parentTask) throws TaskNotFoundException {
        Task parentTaskObj = taskRepository.findById(parentTask).orElse(null);
        if (parentTaskObj == null) {
            log.error("Parent task with ID {} not found", parentTask);
            throw new TaskNotFoundException(parentTask);
        }

        Date date = new Date();
        log.info("Creating task with title {} and description {} on {}", title, description, date);
        Subtask task = Subtask.builder().parentId(parentTaskObj).name(title).details(description).createdDate(date).updatedDate(date).build();

        return subTaskRepository.save(task);
    }

    @Override
    public Subtask toggleTaskCompletion(UUID taskId) throws TaskNotFoundException {
        Subtask subtask = subTaskRepository.findById(taskId).orElse(null);
        if (subtask == null) {
            throw new TaskNotFoundException(taskId);
        }

        subtask.setCompleted(!subtask.isCompleted());
        return subTaskRepository.save(subtask);
    }

    /*
    * Sample Solutions Below
     */

    @Override
    public Subtask getTaskById(UUID taskId) throws TaskNotFoundException {
        Subtask task = subTaskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        return task;
    }

    @Override
    public Subtask updateTask(UUID taskId, String title, String description) throws TaskNotFoundException {
        Subtask task = subTaskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        task.setName(title);
        task.setDetails(description);
        task.setUpdatedDate(new Date());

        return subTaskRepository.save(task);
    }

    @Override
    public boolean deleteTask(UUID taskId) throws TaskNotFoundException {
        Subtask task = subTaskRepository.findById(taskId).orElse(null);
        if (task == null) {
            throw new TaskNotFoundException(taskId);
        }

        subTaskRepository.delete(task);
        return true;
    }
}
