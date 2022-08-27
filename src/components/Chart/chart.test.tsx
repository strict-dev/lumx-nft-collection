import { render } from '@testing-library/react'
import { scatterDataset1 } from 'utils/mock'

import Chart from '.'

describe('<Chart />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Chart dataset={scatterDataset1()} type="scatter" />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
