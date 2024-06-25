export type Task = {
  id: number;
  completed: boolean;
} & CreateTask;

export type CreateTask = {
  title: string;
};
