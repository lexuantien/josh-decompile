import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const Link = ({
    href,
    target,
    rel,
    getProps,
    ...delegated
}) => {
    // There are three types of links:
    // - Internal links to other pages within the same app
    // - External links, to other domains
    // - Hash links (#introduction), for the same page.
    let linkType;

    if (href.match(/^#/)) {
        linkType = 'hash';
    } else if (href.match(/(^http|^mailto)/i) || target === '_blank') {
        linkType = 'external';
    } else {
        linkType = 'internal';
    }

    // By default, external links should open in a new tab.
    // This is overrideable though.
    if (typeof target === 'undefined') {
        target = linkType === 'external' ? '_blank' : undefined;
    }

    const safeRel = target === '_blank' ? 'noopener noreferrer' : rel;

    // Next links require a different sort of funky-dunky syntax.
    if (linkType === 'internal') {
        return ( <
            NextLink passHref href = {
                href
            }
            target = {
                target
            }
            rel = {
                safeRel
            } >
            <
            ExternalLink { ...delegated
            }
            /> <
            /NextLink>
        );
    }

    const link = ( <
        ExternalLink as = {
            linkType === 'internal' ? GatsbyLink : 'a'
        }
        href = {
            href
        }
        rel = {
            safeRel
        }
        target = {
            target
        } { ...delegated
        }
        />
    );

    return link;
};

const ExternalLink = styled.a `
  color: var(--color-primary);

  &:focus {
    outline: 2px auto var(--color-primary);
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;

const InternalLink = styled(ExternalLink).attrs((props) => ({
    to: props.href,
}))
``;

export default Link;