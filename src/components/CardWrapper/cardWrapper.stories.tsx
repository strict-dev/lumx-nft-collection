import { Meta, Story } from '@storybook/react'

import CardWrapper from '.'

export default {
  title: 'CardWrapper',
  component: CardWrapper
} as Meta

export const Default: Story = () => <CardWrapper>Hello</CardWrapper>
