package com.example.backendapplication;

import com.example.backendapplication.model.TaskCreationRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class TaskControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetTasks() throws Exception {
        mockMvc.perform(get("/tasks/")
                        .param("page", "0")
                        .param("size", "10")
                        .param("orderBy", "name")
                        .param("direction", "ASC"))
                .andExpect(status().isOk());
    }

    @Test
    void testCreateTask() throws Exception {
        createTask();
    }

    private MvcResult createTask() throws Exception {
        TaskCreationRequest request = new TaskCreationRequest();
        request.setName("Test Task");
        request.setDetails("Test Details");

        return mockMvc.perform(post("/tasks/task")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk()).andReturn();
    }

    private String getTaskId() throws Exception {
        MvcResult task = createTask();
        String response = task.getResponse().getContentAsString();
        String id = objectMapper.readTree(response).get("id").asText();
        assert id != null;
        return id;
    }

    @Test
    void testToggleTaskCompletion() throws Exception {
        mockMvc.perform(put("/tasks/task/{id}", getTaskId()))
                .andExpect(status().isOk());
    }

    @Test
    void testGetTask() throws Exception {
        mockMvc.perform(get("/tasks/task/{id}", getTaskId()))
                .andExpect(status().isOk());
    }

    @Test
    void testUpdateTask() throws Exception {
        TaskCreationRequest request = new TaskCreationRequest();
        request.setName("Updated Task");
        request.setDetails("Updated Details");

        mockMvc.perform(post("/tasks/task/{id}", getTaskId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk());
    }

    @Test
    void testDeleteTask() throws Exception {
        mockMvc.perform(delete("/tasks/task/{id}", getTaskId()))
                .andExpect(status().isOk());
    }
}