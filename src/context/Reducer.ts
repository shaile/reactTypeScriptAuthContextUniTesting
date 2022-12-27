/* eslint-disable @typescript-eslint/no-explicit-any */

import { storage } from '@/utils'

const currentUser: any = storage.getToken()

const user = currentUser ? currentUser.userName : ''
const token = currentUser ? currentUser.access_token : ''

export const initialState = {
  user: '' || user,
  token: '' || token,
  usersData: '',
  usersDetails: '',
  loading: false,
  errorMessage: null,
}

export const AuthReducer = (initialState: any, action: any) => {
  console.log('RESUCER response', action.type, action.payload)
  switch (action.type) {
    case 'REQUEST_INIT':
      return {
        ...initialState,
        loading: true,
      }
    case 'REQUEST_FINISH':
      return {
        ...initialState,
        loading: false,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload,
        token: action.payload.auth_token,
        loading: false,
      }
    case 'LOGOUT':
      return {
        ...initialState,
        user: '',
        token: '',
        loading: false,
      }
    case 'GET_USERS':
      return {
        ...initialState,
        usersData: action.payload.Items,
        count: action.payload.count,
        loading: false,
        errorMessage: null,
      }
    case 'GET_USER_BY_ID':
      return {
        ...initialState,
        usersDetails: action.payload,
        loading: false,
        errorMessage: null,
      }
    case 'ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
