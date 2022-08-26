import { render, screen } from '@testing-library/react'
import CollectionInfo from '.'

describe('<CollectionInfo />', () => {
  it('should render the heading', () => {
    const { container } = render(<CollectionInfo />)

    expect(screen.getByRole('heading', { name: /CollectionInfo/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
