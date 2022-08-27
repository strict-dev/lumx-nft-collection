import { ComponentMeta, ComponentStory } from '@storybook/react'

import CollectionInfoGridItem from '.'

export default {
  title: 'CollectionInfoGridItem',
  component: CollectionInfoGridItem
} as ComponentMeta<typeof CollectionInfoGridItem>

const Template: ComponentStory<typeof CollectionInfoGridItem> = (args) => (
  <CollectionInfoGridItem {...args} />
)

export const Default = Template.bind({})

Default.args = {
  type: 'vol',
  title: 'Volume',
  data: '1,000'
}
