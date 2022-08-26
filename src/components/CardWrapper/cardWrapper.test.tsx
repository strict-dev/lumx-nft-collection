import { render, screen } from '@testing-library/react'
import CardWrapper from '.'

describe('<CardWrapper />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardWrapper />)

    expect(screen.getByRole('heading', { name: /CardWrapper/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
