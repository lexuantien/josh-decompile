import React from 'react';
import styled from 'styled-components';
import {
    animated
} from 'react-spring';

import useBoop from '@hooks/use-boop.hook';

const Boop = ({
    x,
    y,
    rotation,
    scale,
    timing,
    children,
    ...delegated
}) => {
    const [style, trigger] = useBoop({
        x,
        y,
        rotation,
        scale,
        timing,
    });

    return ( <
        Wrapper onMouseEnter = {
            trigger
        }
        style = {
            style
        } { ...delegated
        } > {
            children
        } <
        /Wrapper>
    );
};

const Wrapper = styled(animated.span)
`
  display: inline-block;
  backface-visibility: hidden;
`;

export default Boop;