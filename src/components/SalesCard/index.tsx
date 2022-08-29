import Container from 'components/Container'
import { Loader } from 'components/Loader'
import { useData } from 'hooks/useData'
import { useState } from 'react'
import { Chart } from 'react-chartjs-2'
import { chartOptions } from 'utils/chartUtils'

const SalesCard = () => {
  const [period, setPeriod] = useState<'24h' | '7d'>('24h')

  const { data, isLoading } = useData()

  return (
    <Container>
      <div className="flex flex-col gap-5 mb-2">
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
      </div>

      {isLoading ? (
        <Loader size="h-64" />
      ) : (
        <div className="flex flex-col gap-5 mb-2">
          <div className="w-full h-32">
            <Chart
              type="scatter"
              options={{
                scales: {
                  x: {
                    grid: {
                      display: false
                    },
                    display: false
                  },
                  y: {
                    grid: {
                      color: '#4E4B66'
                    },
                    ticks: {
                      font: {
                        size: 12,
                        weight: 'bold'
                      },
                      maxTicksLimit: 6
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                maintainAspectRatio: false
              }}
              data={{
                datasets: [
                  {
                    data: [
                      ...(data?.scatterDataset1 as Array<{
                        x: number
                        y: number
                      }>)
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 1)'
                  }
                ]
              }}
            />
          </div>

          <div className="flex items-center h-8">
            <Chart
              type="bar"
              options={{
                ...chartOptions,
                maintainAspectRatio: false
              }}
              data={{
                labels: [...(data?.barsDataset?.x as number[])],
                datasets: [
                  {
                    data: [...(data?.barsDataset.y as Array<number>)],
                    backgroundColor: '#D9DBE9'
                  }
                ]
              }}
            />
          </div>
        </div>
      )}
    </Container>
  )
}

export default SalesCard
