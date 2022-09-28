import ReactDOM from 'react-dom'

import About from './About'

describe('About', () => {
  const title = 'About'
  it('should mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<About title={title} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
