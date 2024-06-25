import React, { PropsWithChildren } from 'react';

import { StoryFn } from '@storybook/react';

import { TaskList } from '.';

export default {
  title: 'Components/TaskList',
  component: TaskList,
};

export const Default = () => (
  <TaskList tasks={[
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ]} />
);
