import { About, AddUser, Dashboard, User, Users } from '@/pages'

export const protectedRoutes = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/addUser',
    element: <AddUser />,
  },
  {
    path: '/about',
    element: <About title={'About Us'} />,
  },
]
