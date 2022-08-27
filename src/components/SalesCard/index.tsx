import CardWrapper from 'components/CardWrapper'
import Chart from 'components/Chart'
import Container from 'components/Container'
import { useData } from 'hooks/useData'
import { useState } from 'react'

import { ChartLoader } from './Loader'

const SalesCard = () => {
  const [period, setPeriod] = useState<'24h' | '7d'>('24h')

  const { data, isLoading } = useData()

  return (
    <div className="pb-60">
      <Container>
        <CardWrapper className="flex flex-col gap-5 mb-2">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Sales</h2>

              {isLoading ? (
                <div className="w-1/3 h-4 rounded-full bg-neutral-600 transit animate-pulse" />
              ) : (
                <p className="text-sm font-bold text-neutral-600">{`Showing ${data?.sales} sales`}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-neutral-700">Time:</p>
              <div>
                <button
                  onClick={() => setPeriod('24h')}
                  className={`px-4 py-2 font-bold rounded-sm 
                  transition duration-300 
                  ${period === '24h' && 'bg-neutral-600 text-white'}`}
                >
                  24H
                </button>
                <button
                  onClick={() => setPeriod('7d')}
                  className={`px-4 py-2 font-bold rounded-sm text-neutral-600 transition duration-300 
                  ${period === '7d' && 'bg-neutral-600 text-white'}`}
                >
                  7d
                </button>
              </div>
            </div>
          </div>
        </CardWrapper>
      </Container>

      {isLoading ? (
        <ChartLoader />
      ) : (
        <Container>
          <CardWrapper className="flex flex-col gap-5 mb-2">
            <Chart
              dataset={
                period === '24h' ? data?.scatterDataset1 : data?.scatterDataset2
              }
              type="scatter"
            />
            <Chart dataset={data?.barsDataset} type="bar" />
          </CardWrapper>
        </Container>
      )}
    </div>
  )
}

export default SalesCard
