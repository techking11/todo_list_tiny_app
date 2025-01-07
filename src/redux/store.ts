import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './slice';
import { todoSlice } from './todo';

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    todos: todoSlice.reducer,
  },
});

export default store;
