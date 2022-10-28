import { lazy } from 'react'

const About = lazy(() => import('./about/About'))
const Dashboard = lazy(() => import('./dashboard/Dashboard'))
const NotFound = lazy(() => import('./notFound/NotFound'))
const AddUser = lazy(() => import('./users/AddUser'))
const User = lazy(() => import('./users/User'))
const Users = lazy(() => import('./users/Users'))

export { NotFound, About, AddUser, User, Dashboard, Users }
