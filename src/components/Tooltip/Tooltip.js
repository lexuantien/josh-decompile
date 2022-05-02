import React from 'react';
import Tippy from '@tippyjs/react';
import styled, {
    keyframes
} from 'styled-components';
import {
    followCursor
} from 'tippy.js';

const Tooltip = ({
    content,
    children,
    type = 'default',
    placement = 'bottom',
    when = true,
    ...delegated
}) => {
    const shouldRenderTooltip = !!when;

    if (!shouldRenderTooltip) {
        return children;
    }

    const Component = type === 'default' ? AnimatedTippy : StaticTippy;

    return ( <
        Component followCursor = {
            true
        }
        content = {
            content
        }
        hideOnClick = {
            false
        }
        placement = {
            placement
        } { ...delegated
        }
        plugins = {
            type === 'default' ? [followCursor] : null
        } >
        {
            children
        } <
        /Component>
    );
};

const enterKeyframesBottom = keyframes `
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(20px);
  }
`;

const enterKeyframesTop = keyframes `
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(-20px);
  }
`;

const StyledTippy = styled(Tippy)
`
  --background: var(--color-gray-900);
  --text: var(--color-background);

  padding: 8px 8px 12px 8px;
  font-size: 18px !important;
  text-align: center;
  background-color: var(--background);
  color: var(--text);

  & > .tippy-arrow {
    color: var(--background);
  }
`;

const AnimatedTippy = styled(StyledTippy)
`
  animation: ${(p) =>
      p.placement === 'bottom'
        ? enterKeyframesBottom
        : enterKeyframesTop}
    400ms both;
`;

const StaticTippy = styled(StyledTippy)
`
  transform: translateY(-10px);
`;

export default Tooltip;