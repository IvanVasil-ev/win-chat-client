import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authorizationState } from '../type';

const initialState = {
  isAuthorized: false,
} as authorizationState;

const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setIsAvailable(state, action: PayloadAction<boolean>) {
      const { payload } = action;
      state.isAuthorized = payload;
    },
  },
});

export const { setIsAvailable } = authSlice.actions;
export default authSlice.reducer;
