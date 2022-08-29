import 'chart.js/auto'

import MenuIcon from '@public/assets/menu-1.svg'
import TrendingUpIcon from '@public/assets/trending-up.svg'
import CardWrapper from 'components/CardWrapper'
import Container from 'components/Container'
import { Loader } from 'components/Loader'
import PeriodSelector from 'components/PeriodSelector'
import { useData } from 'hooks/useData'
import Image from 'next/image'
import { Chart } from 'react-chartjs-2'
import { chartOptions, datasetConfig } from 'utils/chartUtils'
import { v4 as uuid } from 'uuid'

const HypeTrend = () => {
  const { data, isLoading } = useData()

  const charts = ['volume', 'sales floor', 'sales ceiling']

  return (
    <section className="flex flex-col gap-4">
      <Container>
        <CardWrapper>
          <PeriodSelector />
          <div className="flex items-center justify-between pt-3">
            <h2 className="text-lg font-bold">Hyper Trend</h2>
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-sm bg-support-success/10 transition-opacity duration-300
              ${isLoading && 'opacity-0'}`}
            >
              <Image
                src={TrendingUpIcon}
                width={20}
                height={20}
                alt="trending icon"
              />
              <p className="text-xs font-bold text-support-success">
                {data?.hypeTrend.toUpperCase()}
              </p>
            </div>
          </div>
        </CardWrapper>
      </Container>

      <Container>
        <CardWrapper>
          {isLoading ? (
            <Loader size="h-[25rem]" />
          ) : (
            charts.map((chart, i) => (
              <div
                key={uuid()}
                className={`flex flex-col gap-2 py-4 border-b border-neutral-700 
                ${charts.length - 1 === i && 'border-b-0'}`}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-neutral-600 ">
                    {chart.toUpperCase()}
                  </h2>
                  <div className="flex flex-col items-center justify-between">
                    <p className="text-xs font-bold text-support-success">
                      {data?.royalties}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <Image src={MenuIcon} width={20} height={20} alt="icon" />
                      <p className="text-lg font-bold">{data?.floor}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full h-12">
                  <Chart
                    type="line"
                    options={{
                      ...chartOptions,
                      maintainAspectRatio: false
                    }}
                    data={{
                      labels: [...(data?.lineDataset?.x as number[])],
                      datasets: [
                        {
                          data: [...(data?.lineDataset?.y as number[])],
                          ...datasetConfig
                        }
                      ]
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </CardWrapper>
      </Container>
    </section>
  )
}

export default HypeTrend
