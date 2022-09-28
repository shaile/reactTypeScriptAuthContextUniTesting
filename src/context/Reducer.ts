/* eslint-disable @typescript-eslint/no-explicit-any */

const currentUser: any  = localStorage.getItem('currentUser')

const user = localStorage.getItem('currentUser')
  ? JSON.parse(currentUser).user
  : '';
const token = localStorage.getItem('currentUser')
  ? JSON.parse(currentUser).auth_token
  : '';

export const initialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState: any, action: { type: unknown; payload: { user: string; auth_token: string; }; error: string; }) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...initialState,
        user: '',
        token: ''
      };

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};