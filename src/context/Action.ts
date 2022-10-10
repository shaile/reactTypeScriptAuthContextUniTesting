
import { userService } from '@/services'; 
import { LOGINREQ, LOGINRES } from '@/utils';

export async function loginUser(dispatch: any, loginPayload: LOGINREQ) {
    try {
      dispatch({ type: 'REQUEST_INIT' });
      const data: LOGINRES = await userService.login(loginPayload);  
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });  
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