import { storage, LOGINRES, LOGINREQ, LOGIN_URL, USERS_URL } from '@/utils'

import axios from 'axios'
import { fetchWrapper } from './FetchWrapper'
const publicRuntimeConfig = ''

const baseUrl = ''

export const userService = {
  login,
  logout,
  getAll,
  getUser,
  getUserById,
  addUser,
}

/**
 *
 * @param loginPayload
 * @returns user data
 */
async function login(loginPayload: LOGINREQ): Promise<LOGINRES> {
  try {
    const requestOptions: object = {
      method: 'POST',
      url: `${LOGIN_URL}`,
      data: JSON.stringify(loginPayload),
      headers: { 'Content-Type': 'application/json' },
    }
    const { data } = await axios(requestOptions)
    if (data) {
      storage.setToken(data)
    }
    return data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

function logout() {
  storage.clearToken()
}

/**
 * 
 * @returns array of users
 */
async function getAll(): Promise<any> {
  try{
    const data = await fetchWrapper.get(`${USERS_URL}`); 
    return data;
  }catch(error){
    throw new Error(`${error}`)
  }
}

async function getUser() {
  return await fetchWrapper.get(baseUrl)
}

async function getUserById(id: any) {
  return await fetchWrapper.get(`${publicRuntimeConfig}/profile/${id}`)
}

async function addUser(body: any) {
  console.log('User service add User', body)

  return await fetchWrapper.post(`${publicRuntimeConfig}/addPandit`, body)
}
