/* eslint-disable @typescript-eslint/no-unused-vars */
import { storage } from '../utils'
import { useRoutes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { protectedRoutes } from './ProtectedRoutes'

import { publicRoutes } from './PublicRoutes'
import { Layout } from '../components'
import { NotFound } from '@/pages'

export const AppRoutes = () => {
  const isLogin = storage.getToken()
  const notFound = [{ path: '*', element: <NotFound /> }]

  const routes = isLogin ? protectedRoutes : publicRoutes

  const element = useRoutes([...routes, ...notFound])

  return <Layout>{element}</Layout>
}
