import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/types';

import todos from '../data/data';

interface ItemState {
  todos: Todo[];
}

const initialState: ItemState = {
  todos: todos.slice(0, 15),
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodos: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    readTodos: (state) => {
      return state;
    },
    fetchTodo: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    updateTodos: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].completed = action.payload.completed;
      }
    },
    deleteTodos: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { createTodos, readTodos, updateTodos, deleteTodos, fetchTodo } =
  todoSlice.actions;
export { todoSlice };
