
import { ErrorBoundary } from 'react-error-boundary';
import React, { createContext, Suspense, useContext, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { initialState, AuthReducer } from './Reducer';
import { ErrorFallback } from '../components/ErrorBoundry';
import { CircularProgress } from '@mui/material';

const AuthStateContext = createContext<any>('');
const AuthDispatchContext = createContext<any>('');

export function useAuthState() {
	const context = useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error('useAuthState must be used within a AuthProvider');
	}

	return context;
}

export function useAuthDispatch() {
	const context = useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error('useAuthDispatch must be used within a AuthProvider');
	}

	return context;
}
  
  interface AppProviderProps {
    children: React.ReactNode;
  };

export const AuthProvider = ({ children }: AppProviderProps) => {
	const [user, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<Suspense fallback={<CircularProgress />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AuthStateContext.Provider value={user}>
                <AuthDispatchContext.Provider value={dispatch}>
                    <Router>{children}</Router>
                </AuthDispatchContext.Provider>
            </AuthStateContext.Provider>
        </ErrorBoundary>
		</Suspense>
	);
};
