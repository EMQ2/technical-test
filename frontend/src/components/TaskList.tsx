import React, { useEffect, useState } from "react";
import { List, Checkbox, message } from "antd";
import { AddTaskForm } from "./AddTaskForm";
import { CreateTask, Task } from "../types/Task";
import {
  createTask,
  fetchAllTasks,
  toggleTaskCompletion,
} from "../api/TaskAPI";
import { CreateSubTask, SubTask } from "../types/SubTask";
import { createSubTask, fetchAllSubTasks, toggleSubTaskCompletion } from "../api/SubTaskAPI";
import { TaskItem } from "./TaskItem";

interface SubTaskCreate {
  name: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const tasks = await fetchAllTasks().then((response) => response.content);
    await Promise.all(
      tasks.map(async (task: { id: string; subTasks: any }) => {
        const subTasks = await fetchAllSubTasks(task.id).then(
          (response) => response.content,
        );
        task.subTasks = subTasks;
        return task;
      }),
    );
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = (task: CreateTask) => {
    createTask(task).then((response) => {
      message.success("Task added!");
      fetchTasks();
    });
  };

  const addSubTask = (parentId: string, name: string) => {
    let task: CreateSubTask = {
      name: name,
      parentTask: parentId,
    };
    createSubTask(task).then((response) => {
      message.success("Sub Task added!");
      fetchTasks();
    });
  };

  const toggleTaskComplete = (index: string) => {
    toggleTaskCompletion(index).then((response) => {
      fetchTasks();
    });
  };

  const toggleSubTaskComplete = (taskIndex: string, subTaskIndex: string) => {
    toggleSubTaskCompletion(subTaskIndex).then((response) => {
      fetchTasks();
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <AddTaskForm onFormSubmit={addTask} buttonLabel="Add Task" />
      <List
        locale={{ emptyText: "No tasks" }}
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item key={task.id}>
            <TaskItem
              task={task}
              addSubTask={addSubTask}
              toggleTaskComplete={toggleTaskComplete}
              toggleSubTaskComplete={toggleSubTaskComplete}
            />
          </List.Item>
        )}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};



export default TaskList;
