/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useContext, useReducer } from 'react';
import { AuthReducer, initialState } from './Reducer';

interface AuthStateInterface {
    userName: string;
    token: string;
    email: string;
  } 
  
   const authStateContext = createContext<AuthStateInterface | any>({});
   const authDispatchContext = createContext<any>({});



export function useAuthState() {
    const currentUser = useContext(authStateContext);
    if (currentUser === undefined) {
      throw new Error('useAuthState must be used within a AuthProvider');
    }
   
    return currentUser;
  }
   
  export function useAuthDispatch() {
    const context = useContext(authDispatchContext);
    if (context === undefined) {
      throw new Error('useAuthDispatch must be used within a AuthProvider');
    }
   
    return context;
  }

  export const AuthProvider = (children: ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined) => {
     const [user, dispatch] = useReducer(AuthReducer, initialState);
    return(
      <authStateContext.Provider value={user}>
      <authDispatchContext.Provider value={dispatch}>
        {children}
      </authDispatchContext.Provider>
    </authStateContext.Provider>
    )
  };