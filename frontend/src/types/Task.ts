import { SubTask } from "./SubTask";

export type Task = {
  id: string;
  details?: string;
  completed: boolean;
  createdDate?: string;
  updatedDate?: string;
  subTasks?: SubTask[];
} & CreateTask;

export type CreateTask = {
  name: string;
};
