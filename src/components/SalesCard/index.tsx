import { fetchedData } from 'atoms/fetchedData'
import CardWrapper from 'components/CardWrapper'
import Container from 'components/Container'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

const SalesCard = () => {
  const data = useRecoilValue(fetchedData)
  const [period, setPeriod] = useState<'24h' | '7d'>('24h')

  return (
    <Container>
      <CardWrapper className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Sales</h2>
          <p className="text-sm font-bold text-neutral-600">{`Showing ${data.sales} sales`}</p>
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
      </CardWrapper>
    </Container>
  )
}

export default SalesCard
