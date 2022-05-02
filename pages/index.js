import React from 'react';
import styled from 'styled-components';

import {
    COLOR_SWAP_TRANSITION_DURATION
} from '@constants';
import {
    getBlogPostContent,
    getPopularContent,
    getTopCategories,
} from '@helpers/content.helpers';

import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Footer from '@components/Footer';
import Spacer from '@components/Spacer';
import SEO from '@components/SEO';
import NewsletterSignup from '@components/NewsletterSignup';
import VisuallyHidden from '@components/VisuallyHidden';
import {
    SkipNavTrigger,
    SkipNavTarget
} from '@components/SkipNav';

import Hero from '@components/Homepage/Hero';
import NewestContent from '@components/Homepage/NewestContent';
import TopCategories from '@components/Homepage/TopCategories';
import PopularContent from '@components/Homepage/PopularContent';

const Homepage = ({
    newestContent,
    topCategories,
    popularContent,
}) => {
    return ( <
        Wrapper >
        <
        SEO canonicalPath = "" / >

        <
        SkipNavTrigger / >

        <
        Hero / >
        <
        SkipNavTarget / >
        <
        Main as = "main" >
        <
        VisuallyHidden >
        <
        h1 > Josh W Comeau homepage < /h1> <
        /VisuallyHidden> <
        NewestContent gridArea = "newest"
        content = {
            newestContent
        }
        /> <
        TopCategories gridArea = "categories"
        categories = {
            topCategories
        }
        /> <
        PopularContent gridArea = "popular"
        content = {
            popularContent
        }
        /> <
        /Main> <
        SignupWrapper >
        <
        SignupInnerWrapper >
        <
        NewsletterSignup / >
        <
        /SignupInnerWrapper> <
        /SignupWrapper> <
        Spacer size = {
            96
        }
        /> <
        Footer background = "linear-gradient(0deg, var(--color-homepage-light), var(--color-homepage-dark))"
        overscrollColor = "var(--color-homepage-light)" /
        >
        <
        /Wrapper>
    );
};

export async function getStaticProps() {
    const newestContent = await getBlogPostContent({
        limit: 20
    });
    const topCategories = await getTopCategories({
        limit: 7
    });
    const popularContent = await getPopularContent();

    return {
        props: {
            newestContent,
            topCategories,
            popularContent
        },
    };
}

const Wrapper = styled.div `
  background: var(--color-background);
  transition: background ${COLOR_SWAP_TRANSITION_DURATION}ms;
`;

const Main = styled(MaxWidthWrapper)
`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'newest categories'
    'newest popular';
  grid-gap: 64px 96px;
  padding-top: 64px;

  @media ${(p) => p.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'newest'
      'categories'
      'popular';
  }
`;

const SignupWrapper = styled(MaxWidthWrapper)
`
  margin-top: 96px;
`;
const SignupInnerWrapper = styled.div `
  max-width: 650px;
`;

export default Homepage;