import { StorybookConfig } from '@storybook/vue3-vite';
import vue from '@vitejs/plugin-vue';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins || [];
    config.plugins.push(vue());
    return config;
  },
};

export default config;