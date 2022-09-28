import ReactDOM from 'react-dom'

import Login from './Login'

describe('Login', () => {
  it('should mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Login />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
