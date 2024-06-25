import React from "react";

import { List } from "antd";

import { TaskItem } from "./TaskItem";
import { Task } from "../types/Task";

interface ITaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<ITaskListProps> = ({ tasks }) => (
  <List
    locale={{
      emptyText: "There's nothing to do :(",
    }}
    dataSource={tasks}
    renderItem={(task) => <TaskItem task={task} />}
    pagination={{
      position: "bottom",
      pageSize: 10,
    }}
  />
);
