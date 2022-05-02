import React from 'react';
import styled from 'styled-components';
import {
    Link as LinkIcon
} from 'react-feather';

import {
    slugify
} from '@utils';

import Heading from '../Heading';
import VisuallyHidden from '@components/VisuallyHidden';

const ContentHeading = ({
    children,
    ...delegated
}) => {
    const anchorId = slugify(children);

    React.useEffect(() => {
        const numOfAnchorsWithThisId = document.querySelectorAll(
            `#${anchorId}`
        ).length;

        if (numOfAnchorsWithThisId > 1) {
            console.error(
                'Found multiple anchors on the page with this ID:',
                anchorId,
                '\n\n',
                'Please add an explicit unique "anchorId" to this Heading'
            );
        }
    }, [anchorId]);

    return ( <
        Wrapper >
        <
        Heading { ...delegated
        } >
        <
        Anchor name = {
            anchorId
        }
        id = {
            anchorId
        }
        href = {
            `#${anchorId}`
        } >
        <
        IconElement size = {
            24
        }
        /> <
        VisuallyHidden > Link to this heading < /VisuallyHidden> <
        /Anchor>

        {
            children
        } <
        /Heading> <
        /Wrapper>
    );
};

const Wrapper = styled.div `
  position: relative;
`;

const Anchor = styled.a `
  display: none;
  pointer-events: none;

  &:focus {
    outline: none;
  }

  @media ${(p) => p.theme.breakpoints.mdAndLarger} {
    color: inherit;
    display: block;
    position: absolute;
    left: 0;
    transform: translateX(-150%);
    transition: opacity 250ms;
    opacity: 0;
    scroll-margin-top: 128px;

    ${Wrapper}:hover &,
    &:focus {
      opacity: 0.75;
    }
  }
`;

const IconElement = styled(LinkIcon)
`
  pointer-events: auto;
  opacity: ${(p) => (p.hide ? 0 : 1)};

  ${Anchor}:focus & {
    outline: 2px auto var(--color-primary);
  }
`;

export default ContentHeading;