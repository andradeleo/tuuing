import type { Preview } from '@storybook/angular';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    controls: {
      disableSaveFromUI: true
    }
  },
};

export default preview;
