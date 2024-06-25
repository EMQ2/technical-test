import { CreateTask, Task } from "../types/Task";
import { Delete, Get, Post, Put } from "./API";

const fetchAllTasks = async () => {
  const response = await Get("/tasks/", {});
  console.log(response);
  return response;
};

const createTask = async (task: CreateTask) => {
  const response = await Post("/tasks/task", task);
  return response;
};

export { fetchAllTasks, createTask };

// TODO: Implement the following functions
// - toggleTaskCompletion
// - getTask
// - updateTask
// - deleteTask

// Solution
const toggleTaskCompletion = async (id: string) => {
  const response = await Put(`/tasks/task/${id}`, {});
  return response;
};

const getTask = async (id: string) => {
  const response = await Get(`/tasks/task/${id}`, {});
  return response;
};

const updateTask = async (task: Task) => {
  const response = await Post(`/tasks/task/${task.id}`, task);
  return response;
};

const deleteTask = async (id: string) => {
  const response = await Delete(`/tasks/task/${id}`, {});
  return response;
};

export { getTask, updateTask, deleteTask, toggleTaskCompletion };
