// TODO: Create a TaskItem component that displays a task and its subtasks
// The TaskItem component should take the following props:
// - task: Task - The task object to display
// - addSubTask: (index: string, subTask: string) => void - A function to add a subtask to the task
// - toggleTaskComplete: (index: string) => void - A function to toggle the completion status of the task
// - toggleSubTaskComplete: (taskIndex: string, subTaskIndex: string) => void - A function to toggle the completion status of a subtask
// The TaskItem component should render the following:
// - A Checkbox component to display the task name and toggle the completion status of the task
// - A list of subtasks, each displayed as a Checkbox component
// - An AddTaskForm component to add new subtasks to the task
// - The task name and subtask names should have a line-through style when completed
// - The TaskItem component should be a functional component
// - Make sure to import any necessary dependencies
// - Make sure to export the TaskItem component

// Solution
import React from "react";
import { List, Checkbox } from "antd";
import { Task } from "../types/Task";
import { AddTaskForm } from "./AddTaskForm";

interface SubTaskCreate {
  name: string;
}

interface TaskItemProps {
  task: Task;
  addSubTask: (index: string, subTask: string) => void;
  toggleTaskComplete: (index: string) => void;
  toggleSubTaskComplete: (taskIndex: string, subTaskIndex: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  addSubTask,
  toggleTaskComplete,
  toggleSubTaskComplete,
}) => {
  const handleAddSubTask = (subTaskInput: SubTaskCreate) => {
    addSubTask(task.id, subTaskInput.name);
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleTaskComplete(task.id)}
        >
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.name}
          </span>
        </Checkbox>
      </div>
      <div style={{ paddingInline: "20px", marginTop: "10px" }}>
        <AddTaskForm
          onFormSubmit={handleAddSubTask}
          buttonLabel="Add Sub Task"
        />
        <List
          locale={{ emptyText: "No sub tasks" }}
          dataSource={task.subTasks}
          renderItem={(subTask) => (
            <List.Item key={subTask.id}>
              <Checkbox
                checked={subTask.completed}
                onChange={() => toggleSubTaskComplete(task.id, subTask.id)}
              >
                <span
                  style={{
                    textDecoration: subTask.completed ? "line-through" : "none",
                  }}
                >
                  {subTask.name}
                </span>
              </Checkbox>
            </List.Item>
          )}
          style={{ marginTop: "10px" }}
        />
      </div>
    </div>
  );
};
