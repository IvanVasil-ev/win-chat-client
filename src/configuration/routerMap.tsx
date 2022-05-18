import {
  Auth, Login, Registration, ForgotPassword, ResetPassword, NotFound, Chats,
} from '../pages';

export const RouterMap = [
  {
    Component: Auth,
    title: 'Auth',
    path: '/',
    layoutType: 'auth',
    isAuthRequired: false,
  },
  {
    Component: Login,
    title: 'Login',
    path: '/login',
    layoutType: 'auth',
    isAuthRequired: false,
  },
  {
    Component: Registration,
    title: 'Registration',
    path: '/registration',
    layoutType: 'auth',
    isAuthRequired: false,
  },
  {
    Component: ForgotPassword,
    title: 'Forgot password',
    path: '/forgot-password',
    layoutType: 'auth',
    isAuthRequired: false,
  },
  {
    Component: ResetPassword,
    title: 'Reset password',
    path: '/reset-password',
    layoutType: 'auth',
    isAuthRequired: false,
  },
  {
    Component: Chats,
    title: 'Chats',
    path: '/chats',
    layoutType: 'main',
    isAuthRequired: true,
  },
  {
    Component: NotFound,
    title: 'Not found',
    path: '*',
    layoutType: 'auth',
    isAuthRequired: null,
  },
];
