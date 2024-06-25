// TODO: Define the SubTask type, refer to the back-end code for the shape of a SubTask object.

// Solution
import { Task } from "./Task";

export type SubTask = {
  id: string;
  parentId: Task;
  details?: string;
  completed: boolean;
  createdDate?: string;
  updatedDate?: string;
} & CreateSubTask;

export type CreateSubTask = {
  parentTask: string;
  name: string;
};
