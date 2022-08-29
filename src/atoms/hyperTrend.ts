import { periods } from 'components/PeriodSelector'
import { atom } from 'recoil'

type IHyperTrend = {
  period: typeof periods[number]
}

export const hyperTrend = atom({
  key: 'hyper-trend',
  default: {
    period: '1m'
  } as IHyperTrend
})
