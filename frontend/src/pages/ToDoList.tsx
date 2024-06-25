import React, { useEffect } from "react";
import { Row, Col, Card, Typography } from "antd";

// import { TodoList } from "components/TodoList";
import { message } from "antd";

import { CreateTask, Task } from "../types/Task";
import { createTask, fetchAllTasks } from "../api/TaskAPI";
import { AddTaskForm } from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { PageHeader } from "../components/PageHeader";

interface ITodoListProps {}

export const TodoList: React.FunctionComponent<ITodoListProps> = () => {
  const { Title } = Typography;
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await fetchAllTasks();
    setTasks(response.content);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFormSubmit = (todo: CreateTask): void => {
    console.log(todo);
    createTask(todo).then((response) => {
      console.log(response);
      fetchTasks();
      message.success("Task added!");
    });
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        {/* TODO: Implement the page header component and display the following information
          title: Task List
          subTitle: To add a task, just fill the form below and click in add task.

          Solution below
        */}
        <PageHeader
          title="Task List"
          subTitle="To add a task, just fill the form below and click in add task."
        />
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TaskList />
        </Card>
      </Col>
    </Row>
  );
};
