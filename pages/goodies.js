import React from 'react';
import styled, {
    keyframes
} from 'styled-components';

import StandardLayout from '@components/StandardLayout';
import SEO from '@components/SEO';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import Row from '@components/Goodies/Row';
import Spacer from '@components/Spacer';
import TextLink from '@components/TextLink';
import List from '@components/List';
import InlineCode from '@components/InlineCode';

const GoodiesPage = () => {
    return ( <
        StandardLayout >
        <
        Wrapper >
        <
        SEO title = "Goodies" / >
        <
        Title > Bonus Goodies < /Title>

        <
        Spacer size = {
            64
        }
        />

        <
        Row imageSrc = "/images/gradient-generator-goodie.png"
        imageAlt = "Visit the “Gradient Generator” project"
        href = "/gradient-generator"
        title = "Gradient Generator"
        description = { <
            >
            <
            p >
            If you 've ever tried to come up with a beautiful
            gradient from scratch,
            you 've likely found that it'
            s
            pretty tricky!Colors get dull and washed - out in the
            middle. <
            /p> <
            p >
            This tool will help you generate beautiful,
            lush
            gradients.It uses a number of sneaky tricks,
            like
            using easing curves and alternative color modes. <
            /p> <
            />
        }
        /> <
        Row imageSrc = "/images/shadow-palette-goodie.png"
        imageAlt = "Visit the “Shadow Palette Generator” project"
        href = "/shadow-palette"
        title = "Shadow Palette Generator"
        description = { <
            >
            <
            p >
            By
            default,
            < InlineCode > box - shadow < /InlineCode>{' '}
            produces some pretty underwhelming shadows.If we want
            to create lush,
            realistic shadows,
            we need to get a
            bit fancy. <
            /p> <
            p >
            This project is a free online tool that generates
            beautiful,
            rich shadows.It achieves this by layering
            multiple individual shadows with custom parameters. <
            /p> <
            />
        }
        /> <
        Row imageSrc = "/images/og-operator-lookup.png"
        imageAlt = "Visit the Operator Lookup project"
        href = "/operator-lookup"
        title = "Operator Lookup"
        description = { <
            >
            <
            p >
            This nifty little project lets you type in or select a
            JavaScript operator,
            and it tells you about it!
            <
            /p> <
            p >
            I built this project because I was sick of forgetting
            what these blasted operators are called.Often I 'll
            remember the operator 's syntax, but not exactly how it
            works.I can 't use search engines to find out more
            about them,
            since they ignore "special characters"!
            <
            /p> <
            p > Perfect project to bookmark
            for when you need it. < /p> <
            />
        }
        /> <
        Row imageSrc = "/portfolio-book/og-image.png"
        imageAlt = "Visit the Effective Portfolio project"
        href = "/effective-portfolio"
        title = "Building an Effective Dev Portfolio"
        description = { <
            >
            <
            p >
            This is a free 70 - page e - book that teaches you how to
            build a stand - out portfolio site. <
            /p> <
            p >
            Especially
            for folks early in their careers,
            your
            portfolio of projects is your greatest asset.And your
            portfolio site is your showcase,
            your chance to
            present these projects in the best possible light. <
            /p> <
            p >
            This book is a condensed how - to guide,
            to help you
            land that critical first or second job as a software
            developer. <
            /p> <
            />
        }
        /> <
        Row imageSrc = "/images/og-css-for-js.png"
        imageAlt = "Visit the CSS for JavaScript Developers project"
        href = "https://css-for-js.dev"
        title = "CSS for JavaScript Developers"
        description = { <
            >
            <
            p >
            <
            strong > So many < /strong> JavaScript developers hate
            working with CSS. <
            /p> <
            p >
            It 's understandable; the language can be frustrating
            and opaque,
            and it can be hard to get in the groove,
            to find that flow state. <
            /p> <
            p >
            With a bit of deep learning,
            however,
            it 's absolutely
            possible to feel confident and comfortable with CSS.
            And with a mastery of both JS and CSS,
            you 'll be an
            unstoppable force. <
            /p> <
            />
        }
        />

        <
        Row imageSrc = "/images/og-newsletter.png"
        imageAlt = "Learn more about my newsletter"
        href = "/subscribe"
        title = "My Newsletter!"
        description = { <
            >
            <
            p >
            This site has a sibling newsletter.It 's sent roughly
            once or twice a month,
            and contains:
                <
                /p> <
                List >
                <
                List.ListItem >
                Early previews to upcoming posts <
                /List.ListItem> <
                List.ListItem >
                Special subscriber - only content <
                /List.ListItem> <
                List.ListItem >
                Random experimental things I couldn 't quite fit into
            my blog <
            /List.ListItem> <
            /List> <
            p >
            The goal with the newsletter is to spark joy,
            to
            create something you look forward to seeing in your
            inbox. <
            /p> <
            />
        }
        /> <
        /Wrapper> <
        /StandardLayout>
    );
};

const Wrapper = styled(MaxWidthWrapper)
`
  max-width: 900px;
  padding-top: 64px;
`;

const Title = styled.h1 `
  font-size: 64px;
  font-weight: var(--font-weight-bold);
  text-align: center;
  line-height: 1.5;

  @media (max-width: 800px) {
    font-size: 48px;
  }
  @media (max-width: 625px) {
    font-size: 7vw;
    text-align: left;
  }
`;

export default GoodiesPage;