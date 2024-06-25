import React from 'react';
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Task } from '../types/Task';

interface ITaskItemProps {
  task: Task;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  task,
}) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={task.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => {}}
            defaultChecked={task.completed}
          />
        </Tooltip>,
      ]}
      className="list-item"
      key={task.id}
    >
      <div className="task-item">
        <Tag color={task.completed ? 'cyan' : 'red'} className="task-tag">
          {task.title}
        </Tag>
      </div>
    </List.Item>
  );
};