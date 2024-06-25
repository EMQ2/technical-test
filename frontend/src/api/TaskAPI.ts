import { CreateTask, Task } from "../types/Task";
import { get, post } from "./API";

const fetchAllTasks = async () => {
  return [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: true,
    },
  ];
  const response = await get("/task/all", {});
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
