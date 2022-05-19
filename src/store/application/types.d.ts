type Default = {
  modalStatus: boolean;
  modalType: 'info' | 'warn' | 'error';
  modalMessage: string;
  isAvailable: boolean;
  isLoading: boolean;
  error: string,
};

export type RegistrationPayload = {
  email: string;
  login: string;
  password: string;
}

export type LoginPayload = {
  login: string;
  password: string;
}

export type ForgotPasswordPayload = {
  email: string;
}

export type ResetPasswordPayload = {
  email: string;
  newPassword: string;
}

export type ModalPayload = {
  type?: 'info' | 'warn' | 'error';
  status: boolean;
  message?: string;
}

export type ApplicationState = Default;
