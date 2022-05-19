import {
  LoginPayload, RegistrationPayload, ForgotPasswordPayload, ResetPasswordPayload,
} from './types';

export const API_GET_IS_AVAILABLE = 'API_GET_IS_AVAILABLE';
export const API_FORGOT_PASSWORD = 'API_FORGOT_PASSWORD';
export const API_RESET_PASSWORD = 'API_RESET_PASSWORD';
export const API_REGISTRATE = 'API_REGISTRATE';
export const API_LOGIN = 'API_LOGIN';

export const getIsAvailableAction = () => ({
  type: API_GET_IS_AVAILABLE,
});

export const registrateAction = ({ email, login, password }: RegistrationPayload) => ({
  type: API_REGISTRATE,
  payload: { email, login, password },
});

export const loginAction = ({ login, password }: LoginPayload) => ({
  type: API_LOGIN,
  payload: { login, password },
});

export const forgotPasswordAction = ({ email }: ForgotPasswordPayload) => ({
  type: API_FORGOT_PASSWORD,
  payload: { email },
});

export const resetPasswordAction = ({ email, newPassword }: ResetPasswordPayload) => ({
  type: API_RESET_PASSWORD,
  payload: { email, newPassword },
});
