/* eslint-disable @typescript-eslint/no-explicit-any */

import {storage} from '../utils';

const currentUser: any  = storage.getToken();

const user = currentUser ? currentUser.userName : '';
const token = currentUser? currentUser.access_token : '';

export const initialState = {
  user: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState: any, action: any) => {
    console.log('RESUCER response', action.error);
  switch (action.type) {
    case 'REQUEST_INIT':
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
    case 'GET_USERS':
        return {
        ...initialState,
        user: action.payload.Items,
        count: action.payload.count
        }
    case 'ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};