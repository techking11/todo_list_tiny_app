import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all' as 'all' | 'completed' | 'pending',
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<'all' | 'completed' | 'pending'>
    ) => action.payload,
  },
});
export const { setFilter } = filterSlice.actions;
