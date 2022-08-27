import { render } from '@testing-library/react'

import CollectionInfo from '.'

describe('<CollectionInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<CollectionInfo />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
