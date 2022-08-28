import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import SalesCard from '.'

describe('<SalesCard />', () => {
  it('should render the heading', () => {
    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <SalesCard />
        </RecoilRoot>
      </QueryClientProvider>
    )

    expect(
      screen.getByRole('heading', {
        name: /sales/i
      })
    ).toBeInTheDocument()
  })
})
