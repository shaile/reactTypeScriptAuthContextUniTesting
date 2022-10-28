import { ErrorBoundary } from 'react-error-boundary'
import React, { createContext, Suspense, useContext, useReducer } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { initialState, AuthReducer } from './Reducer'
import { ErrorFallback } from '../components/ErrorBoundry'
import Loader from '@/components/theme/Loader'

const AuthStateContext = createContext<any>('')
const AuthDispatchContext = createContext<any>('')

export function useAuthState() {
  const context = useContext(AuthStateContext)
  console.log('useAuthStates', context)
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider')
  }

  return context
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext)
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider')
  }

  return context
}

interface AppProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AppProviderProps) => {
  const [data, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <Suspense fallback={<Loader />}>
      <AuthStateContext.Provider value={data}>
        <AuthDispatchContext.Provider value={dispatch}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router>{children}</Router>
          </ErrorBoundary>
        </AuthDispatchContext.Provider>
      </AuthStateContext.Provider>
    </Suspense>
  )
}
