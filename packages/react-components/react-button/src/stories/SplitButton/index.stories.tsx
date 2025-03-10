import * as React from 'react';
import { Meta } from '@storybook/react';
import { SplitButton } from '@fluentui/react-button';
import descriptionMd from './SplitButtonDescription.md';
import bestPracticesMd from '../Button/ButtonBestPractices.md';

export { Default } from './SplitButtonDefault.stories';
export { Shape } from './SplitButtonShape.stories';
export { Appearance } from './SplitButtonAppearance.stories';
export { Icon } from './SplitButtonIcon.stories';
export { Size } from './SplitButtonSize.stories';
export { SizeSmall } from './SplitButtonSizeSmall.stories';
export { SizeMedium } from './SplitButtonSizeMedium.stories';
export { SizeLarge } from './SplitButtonSizeLarge.stories';
export { Disabled } from './SplitButtonDisabled.stories';
export { WithLongText } from './SplitButtonWithLongText.stories';

export default {
  title: 'Components/SplitButton',
  component: SplitButton,
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
