import { LOGINREQ } from '@/utils'
import { userService } from '.'
import mockAxios from './__mocks__/axios'

jest.mock('axios')

describe('services', () => {
  afterEach(() => {
    mockAxios.reset()
  })

  describe('when API call is successful', () => {
    it('should return users list', async () => {
      const loginPayload: LOGINREQ = {
        username: 'shaile.martin@yopmail.com',
        password: '123',
      }

      // given
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Andrew' },
      ]
      mockAxios.post.mockResolvedValueOnce({ data: users })

      // when
      const result = await userService.login(loginPayload)

      // then
      expect(mockAxios.post).toHaveBeenCalled()
      expect(result).toEqual(users)
    })
  })
})
