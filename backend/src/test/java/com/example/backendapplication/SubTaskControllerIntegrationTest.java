package com.example.backendapplication;

import com.example.backendapplication.model.TaskCreationRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class SubTaskControllerIntegrationTest {

    public static final String INVALID_ID = "00000000-0000-0000-0000-000000000000";
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private String taskId;

    // @BeforeEach
    // void setUp() throws Exception {
    //     taskId = getTaskId();
    // }

    // private String getTaskId() throws Exception {
    //     TaskCreationRequest request = new TaskCreationRequest();
    //     request.setName("Test Task");
    //     request.setDetails("Test Details");

    //     MvcResult task = mockMvc.perform(post("/tasks/task")
    //                     .contentType(MediaType.APPLICATION_JSON)
    //                     .content(objectMapper.writeValueAsString(request)))
    //             .andExpect(status().isOk()).andReturn();
    //     String response = task.getResponse().getContentAsString();
    //     String id = objectMapper.readTree(response).get("id").asText();
    //     assert id != null;
    //     return id;
    // }

    // @Test
    // void testGetTasks() throws Exception {
    //     mockMvc.perform(get("/tasks/")
    //                     .param("page", "0")
    //                     .param("size", "10")
    //                     .param("orderBy", "name")
    //                     .param("direction", "ASC"))
    //             .andExpect(status().isOk());
    // }

    // @Test
    // void testCreateTask() throws Exception {
    //     createSubtask();
    // }



    // private MvcResult createSubtask() throws Exception {
    //     TaskCreationRequest request = new TaskCreationRequest();
    //     request.setName("Test Task");
    //     request.setDetails("Test Details");

    //     return mockMvc.perform(post("/subtasks/?parentTask={id}", taskId)
    //                     .contentType(MediaType.APPLICATION_JSON)
    //                     .content(objectMapper.writeValueAsString(request)))
    //             .andExpect(status().isOk()).andReturn();
    // }

    // private String getSubTaskId() throws Exception {
    //     MvcResult task = createSubtask();
    //     String response = task.getResponse().getContentAsString();
    //     String id = objectMapper.readTree(response).get("id").asText();
    //     assert id != null;
    //     return id;
    // }

    // @Test
    // void testToggleTaskCompletion() throws Exception {
    //     mockMvc.perform(put("/subtasks/{id}", getSubTaskId()))
    //             .andExpect(status().isOk());

    //     // If task id is invalid, throw error
    //     mockMvc.perform(put("/subtasks/{id}", INVALID_ID))
    //             .andExpect(status().isBadRequest())
    //             .andExpect(content().string("Task with id 00000000-0000-0000-0000-000000000000 not found"));
    // }

    // @Test
    // void testGetTask() throws Exception {
    //     mockMvc.perform(get("/subtasks/{id}", getSubTaskId()))
    //             .andExpect(status().isOk());

    //     // If task id is invalid, throw error
    //     mockMvc.perform(get("/subtasks/{id}", INVALID_ID))
    //             .andExpect(status().isBadRequest())
    //             .andExpect(content().string("Task with id 00000000-0000-0000-0000-000000000000 not found"));
    // }

    // @Test
    // void testUpdateTask() throws Exception {
    //     TaskCreationRequest request = new TaskCreationRequest();
    //     request.setName("Updated Task");
    //     request.setDetails("Updated Details");

    //     mockMvc.perform(post("/subtasks/{id}", getSubTaskId())
    //                     .contentType(MediaType.APPLICATION_JSON)
    //                     .content(objectMapper.writeValueAsString(request)))
    //             .andExpect(status().isOk());

    //     // If task id is invalid, throw error
    //     mockMvc.perform(post("/subtasks/{id}", INVALID_ID)
    //                     .contentType(MediaType.APPLICATION_JSON)
    //                     .content(objectMapper.writeValueAsString(request)))
    //             .andExpect(status().isBadRequest())
    //             .andExpect(content().string("Task with id 00000000-0000-0000-0000-000000000000 not found"));
    // }

    // @Test
    // void testDeleteTask() throws Exception {
    //     mockMvc.perform(delete("/subtasks/{id}", getSubTaskId()))
    //             .andExpect(status().isOk());

    //     // If task id is invalid, throw error
    //     mockMvc.perform(delete("/subtasks/{id}", INVALID_ID))
    //             .andExpect(status().isBadRequest())
    //             .andExpect(content().string("Task with id 00000000-0000-0000-0000-000000000000 not found"));
    // }
}