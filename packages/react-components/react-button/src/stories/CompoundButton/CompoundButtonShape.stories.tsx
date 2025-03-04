import * as React from 'react';
import { CompoundButton } from '@fluentui/react-button';

export const Shape = () => (
  <>
    <CompoundButton secondaryContent="Secondary content">Rounded</CompoundButton>
    <CompoundButton secondaryContent="Secondary content" shape="circular">
      Circular
    </CompoundButton>
    <CompoundButton secondaryContent="Secondary content" shape="square">
      Square
    </CompoundButton>
  </>
);

Shape.parameters = {
  docs: {
    description: {
      story: 'A compound button can be rounded, circular, or square.',
    },
  },
};
