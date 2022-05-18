import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { applicationState } from '../type';

const initialState = {
  isAvailable: true,
} as applicationState;

const authSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      const { payload } = action;
      state.isAvailable = payload;
    },
  },
});

export const { setIsAuth } = authSlice.actions;
export default authSlice.reducer;
