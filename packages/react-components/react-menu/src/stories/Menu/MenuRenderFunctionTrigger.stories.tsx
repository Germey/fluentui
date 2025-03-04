import * as React from 'react';
import { ChevronDownRegular } from '@fluentui/react-icons';

import {
  Menu,
  MenuProps,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  MenuTriggerChildProps,
} from '@fluentui/react-menu';

const buttonStyle = { height: 22, verticalAlign: 'middle' };

export const RenderFunctionTrigger = () => {
  const [open, setOpen] = React.useState(false);
  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  return (
    <Menu open={open} onOpenChange={onOpenChange}>
      <MenuTrigger>
        {(props: MenuTriggerChildProps) => (
          <div>
            <button style={buttonStyle}>Custom Trigger</button>
            <button {...props} style={buttonStyle}>
              <ChevronDownRegular fontSize={16} />
            </button>
          </div>
        )}
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>New </MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuItem disabled>Open File</MenuItem>
          <MenuItem>Open Folder</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

RenderFunctionTrigger.parameters = {
  docs: {
    description: {
      story: [
        'When a function is passed as the children of `MenuTrigger`, the actual trigger can be customized to be an',
        'inner part of the function.',
      ].join('\n'),
    },
  },
};
