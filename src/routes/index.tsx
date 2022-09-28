import { useRoutes } from 'react-router-dom'

import Dashboard from '../pages/dashboard/Dashboard';

import { publicRoutes } from './publicRoutes'
export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Dashboard /> }]

  const routes = publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
