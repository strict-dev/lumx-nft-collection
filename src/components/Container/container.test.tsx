import { render } from '@testing-library/react'

import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(<Container>Hello</Container>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
