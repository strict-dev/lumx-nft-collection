import { render } from '@testing-library/react'

import PeriodButton from '.'

describe('<PeriodButton />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <PeriodButton
        label="1d"
        selected={true}
        setSelected={() => {
          '1'
        }}
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
