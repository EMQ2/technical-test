import React, { useEffect, useState } from "react";
import { List, Checkbox, message } from "antd";
import { AddTaskForm } from "./AddTaskForm";
import { CreateTask } from "../types/Task";
import {
  createTask,
  fetchAllTasks,
  toggleTaskCompletion,
} from "../api/TaskAPI";
import { CreateSubTask, SubTask } from "../types/SubTask";
import { createSubTask, fetchAllSubTasks } from "../api/SubTaskAPI";

interface SubTaskCreate {
  name: string;
}

interface Task {
  id: string;
  name: string;
  subTasks: SubTask[];
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const tasks = await fetchAllTasks().then((response) => response.content);
    console.log(tasks, "Task");
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
    console.log(task);
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

  const toggleSubTaskCompletion = (taskIndex: number, subTaskIndex: number) => {
    const newTasks = [...tasks];
    newTasks[taskIndex].subTasks[subTaskIndex].completed =
      !newTasks[taskIndex].subTasks[subTaskIndex].completed;
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <AddTaskForm onFormSubmit={addTask} buttonLabel="Add Task" />
      <List
        locale={{ emptyText: "No tasks" }}
        dataSource={tasks}
        renderItem={(task, index) => (
          <List.Item>
            <Task
              task={task}
              index={index}
              addSubTask={addSubTask}
              toggleTaskComplete={toggleTaskComplete}
              toggleSubTaskCompletion={toggleSubTaskCompletion}
            />
          </List.Item>
        )}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

interface TaskProps {
  task: Task;
  index: number;
  addSubTask: (index: string, subTask: string) => void;
  toggleTaskComplete: (index: string) => void;
  toggleSubTaskCompletion: (taskIndex: number, subTaskIndex: number) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  index,
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
          onChange={() => toggleTaskCompletion(task.id)}
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
          renderItem={(subTask, subTaskIndex) => (
            <List.Item>
              <Checkbox
                checked={subTask.completed}
                onChange={() => toggleSubTaskCompletion(index, subTaskIndex)}
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

export default TaskList;
