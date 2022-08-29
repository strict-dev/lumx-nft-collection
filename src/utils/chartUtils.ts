import { ScriptableContext } from 'chart.js'

export const chartOptions = {
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

export const datasetConfig = {
  fill: true,
  borderColor: '#4dbc19',
  borderWidth: 2,
  backgroundColor: (ctx: ScriptableContext<'line'>) =>
    createChartGradient(ctx, 'rgba(77, 188, 25, 0.2)', 'rgba(77, 188, 25, 0)'),
  tension: 0.4,
  pointRadius: 0
}

export const createChartGradient = (
  context: ScriptableContext<'line'>,
  startColor: string,
  endColor: string
) => {
  const ctx = context.chart.ctx
  const gradient = ctx.createLinearGradient(0, 0, 0, 200)
  gradient.addColorStop(0, startColor)
  gradient.addColorStop(0.4, endColor)
  return gradient
}
