import { Meta, Story } from '@storybook/react'

import Container from '.'

export default {
  title: 'Container',
  component: Container
} as Meta

export const Default: Story = () => <Container>Hello</Container>
