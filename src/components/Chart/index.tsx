import ChartJS from 'chart.js/auto'
import { Bar, Scatter } from 'react-chartjs-2'

ChartJS.defaults.plugins.legend.display = false

const options = {
  scales: {
    y: {
      beginAtZero: true
    },
    x: {
      display: false
    }
  }
}

type ChartProps = {
  type: 'scatter' | 'bar'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataset: any
}

const Chart: React.FC<ChartProps> = ({ dataset, type }) => {
  return (
    <>
      {type === 'scatter' && <Scatter options={options} data={dataset} />}
      {type === 'bar' && (
        <div className="flex items-center gap-2">
          <p className="text-xs font-bold text-neutral-700">VOL</p>
          <div className="w-full h-10">
            <Bar
              options={{
                ...options,
                maintainAspectRatio: false,
                scales: {
                  y: { display: false },
                  x: { display: false }
                }
              }}
              data={dataset}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Chart
