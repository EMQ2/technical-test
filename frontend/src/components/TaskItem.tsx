import React from "react";
import { Tooltip, Tag, List, Switch, Button, Typography, Checkbox } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Task } from "../types/Task";
import { toggleTaskCompletion } from "../api/TaskAPI";
import { AddTaskForm } from "./AddTaskForm";

interface SubTaskCreate {
  name: string;
}

interface TaskProps {
  task: Task;
  addSubTask: (index: string, subTask: string) => void;
  toggleTaskComplete: (index: string) => void;
  toggleSubTaskCompletion: (taskIndex: string, subTaskIndex: number) => void;
}

export const TaskItem: React.FC<TaskProps> = ({
  task,
  addSubTask,
  toggleTaskComplete,
  toggleSubTaskCompletion,
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
          dataSource={task.subTasks}
          renderItem={(subTask, subTaskIndex) => (
            <List.Item>
              <Checkbox
                checked={subTask.completed}
                onChange={() => toggleSubTaskCompletion(task.id, subTaskIndex)}
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

