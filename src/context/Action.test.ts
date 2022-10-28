import { userService } from '@/services'
import { LOGINREQ, LOGINRES } from '@/utils'
import { getAllUsers, loginUser } from './Action'

describe('Action', () => {
  const loginPayload: LOGINREQ = {
    username: 'shaile.martin@yopmail.com',
    password: '123',
  }
  const users: any = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Andrew' },
  ]

  const dispatch = jest.fn()

  describe('Login', () => {
    const serciceSpy = jest.spyOn(userService, 'login')
    describe('when API call fails', () => {
      it('should diaptch error', async () => {
        try {
          serciceSpy.mockImplementation(() => {
            throw new Error('network error')
          })
          await loginUser(dispatch, loginPayload)
        } catch (error: any) {
          expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR', error: error })
        }
      })
    })
    describe('when API call is successful', () => {
      it('should return users list', async () => {
        serciceSpy.mockReturnValue(users)
        const data: LOGINRES = await userService.login(loginPayload)

        await loginUser(dispatch, loginPayload)
        expect(dispatch).toHaveBeenCalledWith({ type: 'REQUEST_INIT' })
        expect(dispatch).toHaveBeenCalledWith({ type: 'LOGIN_SUCCESS', payload: data })
        expect(serciceSpy).toBeCalled()
      })
    })
  })

  describe('getAllUsers', () => {
    const serciceSpy = jest.spyOn(userService, 'getAll')
    describe('when API call fails', () => {
      it('should diaptch error', async () => {
        try {
          serciceSpy.mockImplementation(() => {
            throw new Error('network error')
          })
          await getAllUsers(dispatch)
        } catch (error: any) {
          expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR', error: error })
        }
      })
    })
    describe('when API call is successful', () => {
      it('should return users list', async () => {
        serciceSpy.mockReturnValue(users)
        const data: LOGINRES = await userService.getAll()

        await getAllUsers(dispatch)

        expect(dispatch).toHaveBeenCalledWith({ type: 'REQUEST_INIT' })
        expect(dispatch).toHaveBeenCalledWith({ type: 'GET_USERS', payload: data })
        expect(serciceSpy).toBeCalled()
      })
    })
  })
})
