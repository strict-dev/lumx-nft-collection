import { ComponentStory, Meta } from '@storybook/react'
import { barsDataset, scatterDataset1 } from 'utils/mock'

import Chart from '.'
export default {
  title: 'Chart',
  component: Chart
} as Meta

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />

export const Scatter = Template.bind({})

Scatter.args = {
  type: 'scatter',
  dataset: scatterDataset1()
}

export const Bar = Template.bind({})

Bar.args = {
  type: 'bar',
  dataset: barsDataset()
}
