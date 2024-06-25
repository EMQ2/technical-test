// TODO: Implement the following functions:
// - fetchAllSubTasks
// - createSubTask
// - toggleSubTaskCompletion
// - getSubTask
// - updateSubTask
// - deleteSubTask

// Solution

import { CreateSubTask, SubTask } from "../types/SubTask";
import { Delete, Get, Post, Put } from "./API";

const fetchAllSubTasks = async (parentId: string) => {
  const response = await Get("/subtasks/", { parentTask: parentId });
  return response;
};

const createSubTask = async (subTask: CreateSubTask) => {
  const response = await Post(`/subtasks/?parentTask=${subTask.parentTask}`, {
    name: subTask.name,
  });
  return response;
};

const toggleSubTaskCompletion = async (id: string) => {
  const response = await Put(`/subtasks/${id}`, {});
  return response;
};

const getSubTask = async (id: string) => {
  const response = await Get(`/subtasks/${id}`, {});
  return response;
};

const updateSubTask = async (task: SubTask) => {
  const response = await Post(`/tasks/task/${task.id}`, task);
  return response;
};

const deleteSubTask = async (id: string) => {
  const response = await Delete(`/tasks/task/${id}`, {});
  return response;
};

export {
  fetchAllSubTasks,
  createSubTask,
  getSubTask,
  updateSubTask,
  deleteSubTask,
  toggleSubTaskCompletion,
};
