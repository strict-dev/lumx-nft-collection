import { render } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = render(<Header />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
