import * as React from 'react';
import { Meta } from '@storybook/react';
import { CompoundButton } from '@fluentui/react-button';
import descriptionMd from './CompoundButtonDescription.md';
import bestPracticesMd from '../Button/ButtonBestPractices.md';

export { Default } from './CompoundButtonDefault.stories';
export { Shape } from './CompoundButtonShape.stories';
export { Appearance } from './CompoundButtonAppearance.stories';
export { Icon } from './CompoundButtonIcon.stories';
export { Size } from './CompoundButtonSize.stories';
export { Disabled } from './CompoundButtonDisabled.stories';
export { WithLongText } from './CompoundButtonWithLongText.stories';
export { AsToggleButton } from './CompoundButtonAsToggleButton.stories';

export default {
  title: 'Components/CompoundButton',
  component: CompoundButton,
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
