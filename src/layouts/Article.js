import React from 'react';
import styled from 'styled-components';
import {
    MDXRemote
} from 'next-mdx-remote';

import useHits from '@hooks/use-hits.hook';
import {
    COMPONENTS
} from '@helpers/mdx-components.helpers';
import {
    getFormattedName
} from '@helpers/category.helpers';

import SEO from '@components/SEO';
import Heading from '@components/Heading';
import StandardLayout from '@components/StandardLayout';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import ArticleNewsletterSignup from '@components/ArticleNewsletterSignup';
import ArticleHeroImage from '@components/ArticleHeroImage';
import FloatingSidebar from '@components/FloatingSidebar';
import ContentFooterArticle from '@components/ContentFooter/ContentFooterArticle';
import {
    ContentProvider
} from '@components/ContentContext';
import ToastySubscribe from '@components/ToastySubscribe/LazyToastySubscribe';

const ArticleLayout = ({
        mdx,
        frontmatter
    }) => {
        const {
            slug,
            title,
            subtitle,
            seoTitle,
            abstract,
            categorySlug,
            isPublished,
            noNewsletter,
            newsletterCta,
            humanReadableDate,
            heroImage,
            __resourcePath,
        } = frontmatter;

        const hits = useHits(slug);

        const hasHeroImage = !!heroImage;

        return ( <
            ContentProvider contentType = "article"
            slug = {
                slug
            }
            title = {
                title
            }
            subtitle = {
                subtitle
            }
            isPublished = {
                isPublished
            }
            location = {
                typeof window !== 'undefined' && window.location
            }
            hits = {
                hits
            } >
            <
            StandardLayout >
            <
            Hero style = {
                {
                    // If we have a hero image, the generous amount
                    // of top padding pushes the content down too far.
                    '--top-padding': hasHeroImage ? '64px' : '128px',
                }
            } >
            {
                hasHeroImage && < ArticleHeroImage { ...heroImage
                }
                />} <
                Category > {
                    getFormattedName(categorySlug)
                } < /Category> <
                Heading type = "large-title" > {
                    title
                } < /Heading> <
                Subtitle > {
                    subtitle
                } < /Subtitle> <
                /Hero> <
                MaxWidthWrapper style = {
                    {
                        position: 'static'
                    }
                } >
                <
                Main >
                <
                FloatingSidebar slug = {
                    slug
                }
                /> <
                ArticleWrapper > { /* CONTENTS */ } <
                MDXRemote { ...mdx
                }
                components = {
                    COMPONENTS
                }
                /> <
                /ArticleWrapper>

                {
                    !noNewsletter && ( <
                        ArticleNewsletterSignup variant = {
                            categorySlug === 'career' ? 'careers' : 'default'
                        }
                        cta = {
                            newsletterCta
                        }
                        />
                    )
                }

                <
                ContentFooterArticle
                key = "content-footer"
                slug = {
                    slug
                }
                lastUpdated = {
                    humanReadableDate
                }
                hits = {
                    hits
                }
                /> <
                /Main> <
                /MaxWidthWrapper> <
                SEO
                title = {
                    title
                }
                seoTitle = {
                    seoTitle
                }
                canonicalPath = {
                    `/${categorySlug}/${slug}/`
                }
                description = {
                    abstract
                }
                ogImage = {
                    `/images/og-${slug}.png`
                }
                /> <
                /StandardLayout>

                <
                ToastySubscribe
                variant = {
                    categorySlug === 'career' ? 'careers' : 'default'
                }
                /> <
                /ContentProvider>
            );
        };

        const Hero = styled.div `
  padding: var(--top-padding) 32px 96px 32px;
  text-align: center;

  @media ${(p) => p.theme.breakpoints.smAndSmaller} {
    padding: 96px 16px 72px 16px;
    text-align: left;
  }
`;

        const ArticleWrapper = styled.article `
  padding-bottom: 32px;
`;

        const Category = styled.div `
  font-size: 1rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  margin-bottom: 16px;
`;
        const Subtitle = styled.h2 `
  font-size: 24px;
  font-weight: var(--font-weight-light);
  color: var(--color-gray-700);
  margin-top: 16px;
`;

        const Main = styled.main `
  max-width: 675px;
  margin: auto;
`;

        export default ArticleLayout;