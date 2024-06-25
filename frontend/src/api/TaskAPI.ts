import { CreateTask, Task } from "../types/Task";
import { get, post } from "./API";

const fetchAllTasks = async () => {
  const response = await get("/tasks/", {});
  console.log(response);
  return response;
};

const createTask = async (task: CreateTask) => {
  const response = await post("/tasks/task", task);
  return response;
};

export { fetchAllTasks, createTask };
