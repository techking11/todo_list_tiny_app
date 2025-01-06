import axios from 'axios';
import { Todo, TodoWithoutId } from '../types/types';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchTodos = async (): Promise<Todo[]> => {
  const { data } = await apiClient.get<Todo[]>('/todos');
  return data.slice(0, 13);
};

export const addTodo = async (todo: TodoWithoutId): Promise<Todo> => {
  const { data } = await apiClient.post<TodoWithoutId>('/todos', todo);
  return data;
};

export const updateTodo = async ({
  id,
  title,
  completed,
}: Todo): Promise<Todo> => {
  const { data } = await apiClient.patch<Todo>(`/todos/${id}`, {
    title,
    completed,
  });
  return data;
};

export const deleteTodo = async (id: number): Promise<number> => {
  await apiClient.delete(`/todos/${id}`);
  return id;
};
