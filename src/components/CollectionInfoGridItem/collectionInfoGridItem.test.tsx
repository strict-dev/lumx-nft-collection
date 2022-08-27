import { render } from '@testing-library/react'

import CollectionInfoGridItem from '.'

describe('<CollectionInfoGridItem />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <CollectionInfoGridItem data="1000" title="Vol" />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
