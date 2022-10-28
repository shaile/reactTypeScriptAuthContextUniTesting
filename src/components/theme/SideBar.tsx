import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <>
      {/* ======= Sidebar ======= */}
      <aside id='sidebar' className='sidebar'>
        <ul className='sidebar-nav' id='sidebar-nav'>
          <li className='nav-item'>
            <Link className='nav-link ' to='/'>
              <i className='bi bi-grid'></i>
              <span>Dashboard</span>
            </Link>
          </li>
          {/* End Dashboard Nav */}

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/users'>
              <i className='bi bi-person'></i>
              <span>Users</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link collapsed' to='/addUser'>
              <i className='bi bi-person'></i>
              <span>Add User</span>
            </Link>
          </li>
        </ul>
      </aside>
      {/* End Sidebar*/}
    </>
  )
}
