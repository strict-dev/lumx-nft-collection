import './global.css';
import * as NextImage from 'next/image';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { addParameters } from '@storybook/client-api';

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

export const decorators = [withProviders];

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
  viewMode: 'docs'
}

addParameters({
  viewMode: 'docs',
});