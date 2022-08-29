import { ComponentMeta, ComponentStory } from '@storybook/react'

import PeriodSelector from '.'

export default {
  title: 'PeriodSelector',
  component: PeriodSelector
} as ComponentMeta<typeof PeriodSelector>

const Template: ComponentStory<typeof PeriodSelector> = () => <PeriodSelector />

export const Default = Template.bind({})
