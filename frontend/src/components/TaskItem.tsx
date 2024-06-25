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
