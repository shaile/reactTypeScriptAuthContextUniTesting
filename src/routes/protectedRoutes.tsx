import About from '../pages/about/About'
import Dashboard from '../pages/dashboard/Dashboard'


export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/about',
    element: <About title={'About Us'} />,
  },
]
