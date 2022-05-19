import {
  Auth, Login, Registration, ForgotPassword, ResetPassword, NotFound, Main,
} from '../pages';

type RouterMapType = {
  Component: any;
  title: string;
  path: string;
  layoutType: string;
  isMainPage?: boolean;
  isAuthRequired: boolean | null;
};

export const RouterMap: RouterMapType[] = [
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
    Component: Main,
    title: 'Chats',
    path: '/chats',
    isMainPage: true,
    layoutType: 'main',
    isAuthRequired: true,
  },
  {
    Component: Main,
    title: 'Profile',
    path: '/profile',
    isMainPage: true,
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
