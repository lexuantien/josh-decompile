import React from 'react';
import path from 'path';
import styled from 'styled-components';
import {
    serialize
} from 'next-mdx-remote/serialize';
import matter from 'gray-matter';

import {
    getAllBlogPostPaths,
    getBlogPostMdx,
    enhanceBlogPostFrontmatter,
    getHeadings,
} from '@helpers/content.helpers';
import Tutorial from '../../src/layouts/Tutorial';
import Article from '../../src/layouts/Article';

const LAYOUTS = {
    Tutorial,
    Article,
};

function BlogPost({
    categorySlug,
    contentSlug,
    mdx,
    frontmatter,
    headings,
}) {
    const LayoutComponent = LAYOUTS[frontmatter.layout];

    return ( <
        LayoutComponent frontmatter = {
            frontmatter
        }
        mdx = {
            mdx
        }
        headings = {
            headings
        }
        />
    );
}

export async function getStaticPaths() {
    const blogPostPaths = await getAllBlogPostPaths({
        ignoreExternal: true,
    });

    const paths = blogPostPaths.map((item) => ({
        params: item,
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({
    params
}) {
    const {
        categorySlug,
        contentSlug
    } = params;

    const rawMdx = await getBlogPostMdx(categorySlug, contentSlug);

    let {
        content: markdown,
        data: frontmatter,
        ...rest
    } = matter(
        rawMdx
    );

    frontmatter = enhanceBlogPostFrontmatter(
        categorySlug,
        contentSlug,
        frontmatter
    );

    const headings = getHeadings(rawMdx);

    const mdx = await serialize(markdown);

    return {
        props: {
            categorySlug,
            contentSlug,
            mdx,
            frontmatter,
            headings,
        },
    };
}

export default BlogPost;