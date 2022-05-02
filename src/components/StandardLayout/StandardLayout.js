import React from 'react';
import styled, {
    createGlobalStyle
} from 'styled-components';

import {
    HEADER_HEIGHT,
    COLOR_SWAP_TRANSITION_DURATION,
} from '@constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Header from '../Header';
import Footer from '../Footer';
import Spacer from '../Spacer';
import EasedGradient from '../EasedGradient';
import {
    SkipNavTrigger,
    SkipNavTarget
} from '../SkipNav';

const Background = createGlobalStyle `
  body {
    background: ${(p) => p.background};
  }
`;

const StandardLayout = ({
    children,
    includeHeader = true,
    background = 'var(--color-background)',
}) => {
    return ( <
        Wrapper style = {
            {
                '--background': background
            }
        } >
        <
        SkipNavTrigger / > {
            includeHeader && ( <
                HeaderWrapper >
                <
                MaxWidthWrapper >
                <
                Header type = "default" / >
                <
                /MaxWidthWrapper> <
                /HeaderWrapper>
            )
        }

        <
        ChildWrapper style = {
            {
                background
            }
        } >
        <
        SkipNavTarget / > {
            children
        } <
        Spacer size = {
            96
        }
        /> <
        /ChildWrapper>

        <
        Footer background = {
            background
        }
        />

        <
        Background background = {
            background
        }
        /> <
        /Wrapper>
    );
};

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled.div `
  position: sticky;
  top: -1px;
  z-index: 3;
  background: var(--background);
  transition: background ${COLOR_SWAP_TRANSITION_DURATION}ms;
`;

const GradientWrapper = styled.div `
  position: fixed;
  left: 0;
  right: 0;
  top: ${HEADER_HEIGHT}px;
  z-index: 2;
  pointer-events: none;
  transform: translateY(-1px);

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    display: none;
  }
`;

const ChildWrapper = styled.div `
  position: relative;
  z-index: 1;
  flex: 1;
  transition: background ${COLOR_SWAP_TRANSITION_DURATION}ms;
  max-width: 100vw;
  overflow: hidden;
`;

export default StandardLayout;