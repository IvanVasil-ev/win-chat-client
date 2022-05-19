import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { redirectTo } from '../../utilities';

import { ApplicationState, ModalPayload } from './types';

const initialState = {
  modalStatus: false,
  modalType: 'info',
  modalMessage: '',
  isAvailable: true,
  isLoading: false,
  error: '',
} as ApplicationState;

const authSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setIsAvailable(state, action: PayloadAction<boolean>) {
      const { payload } = action;
      state.isAvailable = payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      const { payload } = action;
      state.isLoading = payload;
    },
    setError(state, action: PayloadAction<string>) {
      const { payload } = action;
      state.error = payload;
    },
    setModal(state, action: PayloadAction<ModalPayload>) {
      const { payload: { status, message = '', type = 'info' } } = action;
      if (!status) {
        state.modalStatus = false;
        state.modalMessage = '';
        return;
      }
      state.modalStatus = true;
      state.modalMessage = message;
      state.modalType = type;
    },
    logout() {
      localStorage.removeItem('token');
      redirectTo('/');
    },
  },
});

export const {
  setIsAvailable, setIsLoading, setError, setModal, logout,
} = authSlice.actions;
export default authSlice.reducer;
