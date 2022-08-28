import { ComponentMeta, ComponentStory } from '@storybook/react'

import PeriodButton from '.'

export default {
  title: 'PeriodButton',
  component: PeriodButton
} as ComponentMeta<typeof PeriodButton>

const Template: ComponentStory<typeof PeriodButton> = (args) => (
  <PeriodButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  label: '1m',
  selected: true
}
