import { CreateTask, Task } from "../types/Task";
import { get, post } from "./API";

const fetchAllTasks = async () => {
  const response = await get("/tasks/", {});
  console.log(response);
  return response;
};

const createTask = async (task: CreateTask) => {
  return {
    id: 1,
    title: "Task 1",
  };
  const response = await post("/task/create", task);
  return response;
};

export { fetchAllTasks, createTask };
