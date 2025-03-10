import * as React from 'react';
import { Meta } from '@storybook/react';
import { MenuButton } from '@fluentui/react-button';
import descriptionMd from './MenuButtonDescription.md';
import bestPracticesMd from '../Button/ButtonBestPractices.md';

export { Default } from './MenuButtonDefault.stories';
export { Shape } from './MenuButtonShape.stories';
export { Appearance } from './MenuButtonAppearance.stories';
export { Icon } from './MenuButtonIcon.stories';
export { Size } from './MenuButtonSize.stories';
export { SizeSmall } from './MenuButtonSizeSmall.stories';
export { SizeMedium } from './MenuButtonSizeMedium.stories';
export { SizeLarge } from './MenuButtonSizeLarge.stories';
export { Disabled } from './MenuButtonDisabled.stories';
export { WithLongText } from './MenuButtonWithLongText.stories';

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', gap: '1em', flexFlow: 'wrap', justifyContent: 'space-evenly' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
