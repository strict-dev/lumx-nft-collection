import { render, screen } from '@testing-library/react'

import CardWrapper from '.'

describe('<CardWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardWrapper>Hello</CardWrapper>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
