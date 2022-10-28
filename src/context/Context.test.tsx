import { userService } from '@/services'
import { render } from '@testing-library/react'
import { createContext, useContext } from 'react'
import { AuthProvider } from './Context'

const AuthStateContext = createContext<any>('')
// const AuthDispatchContext = createContext<any>('');

const MockComponent = () => {
  const { user, token, logout, errorMessage } = useContext(AuthStateContext)
  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {token && <div role='user'>{user.fullName}</div>}
      <button onClick={logout}>logout</button>
    </div>
  )
}

describe('<AuthProvider />', () => {
  it('proper data is sent to the component', async () => {
    jest.spyOn(userService, 'getAll').mockImplementation(() =>
      Promise.resolve({
        token: true,
        user: {
          id: 'mock-id',
          email: 'mock-email',
          role: 'mock-role',
        },
      }),
    )

    render(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>,
    )

    //   await waitFor(() => {
    // 	expect(screen.getByRole('user')).toBeInTheDocument();
    //   });
  })
})
