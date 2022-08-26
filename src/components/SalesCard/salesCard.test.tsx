import { render, screen } from '@testing-library/react'
import SalesCard from '.'

describe('<SalesCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<SalesCard />)

    expect(screen.getByRole('heading', { name: /SalesCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
