import { render, screen } from '@testing-library/react'
import CollectionInfoGridItem from '.'

describe('<CollectionInfoGridItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<CollectionInfoGridItem />)

    expect(screen.getByRole('heading', { name: /CollectionInfoGridItem/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
