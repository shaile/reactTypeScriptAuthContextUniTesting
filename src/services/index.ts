import { storage, LOGINREQ, LOGIN_URL, USERS_URL } from '@/utils'
import axios from 'axios'
import { fetchWrapper } from './FetchWrapper'

export const userService = {
  login,
  logout,
  getAll,
  getUserById,
}

/**
 *
 * @param loginPayload
 * @returns user data
 */
async function login(loginPayload: LOGINREQ): Promise<any> {
  try {
    const header: any = {
      headers: { 'Content-Type': 'application/json' },
    }
    const { data } = await axios.post(LOGIN_URL, JSON.stringify(loginPayload), header)
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
  try {
    const data = await fetchWrapper.get(`${USERS_URL}`)
    return data
  } catch (error) {
    throw new Error(`${error}`)
  }
}

// async function getUser() {
//   return await fetchWrapper.get(baseUrl)
// }

async function getUserById(id: any) {
  return await fetchWrapper.get(`${USERS_URL}/${id}`)
}

// async function addUser(body: any) {
//   console.log('User service add User', body)

//   return await fetchWrapper.post(`${publicRuntimeConfig}/addPandit`, body)
// }
