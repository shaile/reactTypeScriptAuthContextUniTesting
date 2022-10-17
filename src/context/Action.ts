
import { userService } from '@/services';  
import { storage } from '@/utils';

export async function loginUser(dispatch: any, loginResponse: any) {
    try {
      dispatch({ type: 'LOGIN_SUCCESS', payload: loginResponse });  
      storage.setToken(loginResponse)
    } catch (error) {
      dispatch({ type: 'ERROR', error: error });
    }
  }


  export async function getAllUsers(dispatch: any): Promise<any>{
    try{
        dispatch({ type: 'REQUEST_INIT' });
        const data: any = await userService.getAll(); 
        dispatch({ type: 'GET_USERS', payload: data });
    }catch (error: any){
        dispatch({ type: 'ERROR', error: error });
    }
  }
   
  export async function logout(dispatch: any) {
    dispatch({ type: 'LOGOUT' }); 
  }