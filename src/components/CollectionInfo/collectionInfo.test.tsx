import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

import CollectionInfo from '.'

describe('<CollectionInfo />', () => {
  it('should render the heading', () => {
    const queryClient = new QueryClient()

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <CollectionInfo />
        </RecoilRoot>
      </QueryClientProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
