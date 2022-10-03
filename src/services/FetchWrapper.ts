import axios from 'axios'; 
import { userService } from '.';
import {storage} from '../utils';


export const fetchWrapper = {
 
  get,

  post,

  put,

  delete: _delete,
};

async function get(url: any) {
  const config: any = {
		headers: authHeader(),
	};
  
  const response = await axios.get(url, config); 
  return handleResponse(response);
}

async function post(url: string | URL, body: any) {
  const requestOptions: any = {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',

      'Access-Control-Allow-Origin': '*',

      ...authHeader(),
    },

    credentials: 'include',

    body: JSON.stringify(body),
  };

  const response = await fetch(url, requestOptions);

  return handleResponse(response);
}

async function put(url: RequestInfo | URL, body: any) {
  const requestOptions: object = {
    method: 'PUT',

    headers: { 'Content-Type': 'application/json', ...authHeader() },

    body: JSON.stringify(body),
  };

  const response = await fetch(url, requestOptions);
  return handleResponse(response);
}

// prefixed with underscored because delete is a reserved word in javascript

function _delete(url: RequestInfo | URL) {
  const requestOptions: any = {
    method: 'DELETE',

    headers: authHeader(),
  };

  return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function authHeader() { 
  const {access_token: token} = storage.getToken(); 
  if (token) { 
    return { Authorization: `Bearer ${token}`};
   }  
} 


async function handleResponse(response: any) {
  const statusCode: any = [200, 201] ;
  const {data} = response;
  if (!statusCode.includes(response.status)) {
    if ([401, 403].includes(response.status) && storage.getToken()) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      userService.logout();
    }

    const error = (data && data.message) || response.statusText;

    return Promise.reject(error);
  }
  
  return data;
}
