import './global.css';
import * as NextImage from 'next/image';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { rest } from 'msw';
import data from '../src/utils/mock';

initialize();

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const withProviders = (StoryFn) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {StoryFn()}
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export const decorators = [withProviders, mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  viewMode: 'docs',
  msw: {
    handlers: [
      rest.get('/api/collections', (req, res, ctx) => {
        return res(
          ctx.json(data)
        )
    }),
  ]
 }
}
