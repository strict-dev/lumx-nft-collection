import CardWrapper from 'components/CardWrapper'
import Container from 'components/Container'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import PeriodButton from './PeriodButton'

export const periods = ['1m', '5m', '15m', '30m', '1h', '1d'] as const

const PeriodSelector = () => {
  const [periodSelected, setPeriodSelected] = useState('1m')

  return (
    <Container>
      <CardWrapper className="flex items-center justify-between">
        <p className="font-normal text-neutral-600">Time:</p>
        <div className="flex items-center gap-3">
          {periods.map((period) => (
            <PeriodButton
              label={period}
              key={uuid()}
              selected={periodSelected === period}
              setSelected={setPeriodSelected}
            />
          ))}
        </div>
      </CardWrapper>
    </Container>
  )
}

export default PeriodSelector
