import React from 'react';
import styled from 'styled-components';

import useScrollPosition from '@hooks/use-scroll-position.hook';

import ContentLikeButton from '../ContentLikeButton';

const FloatingSidebar = ({
    slug
}) => {
    const [, scrollY] = useScrollPosition();

    const isInvisible = scrollY < 250;

    return ( <
        Wrapper style = {
            {
                opacity: isInvisible ? 0 : 1,
                visibility: isInvisible ? 'hidden' : 'visible',
                transition: isInvisible ?
                    `opacity 500ms, visibility 0ms 500ms` :
                    `opacity 500ms, visibility 0ms`,
            }
        } >
        <
        ContentLikeButton slug = {
            slug
        }
        /> <
        /Wrapper>
    );
};

const Wrapper = styled.div `
  display: none;
  position: fixed;
  top: 256px;

  @media ${p => p.theme.breakpoints.lgAndLarger} {
    display: block;
    right: 8px;
  }
  @media (min-width: 1200px) {
    right: calc((100vw - 1150px) / 2);
  }
`;

export default FloatingSidebar;