import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import PeriodButton from './PeriodButton'

export const periods = ['1m', '5m', '15m', '30m', '1h', '1d'] as const

const PeriodSelector = () => {
  const [periodSelected, setPeriodSelected] = useState('1m')

  return (
    <div className="flex items-center gap-2 pb-3 border-b border-neutral-700">
      <p className="font-normal text-neutral-600">Time:</p>
      <div className="flex items-center justify-between w-full">
        {periods.map((period) => (
          <PeriodButton
            label={period}
            key={uuid()}
            selected={periodSelected === period}
            setSelected={setPeriodSelected}
          />
        ))}
      </div>
    </div>
  )
}

export default PeriodSelector
