import React from 'react';

import {
    getFormattedName
} from '@helpers/category.helpers';
import {
    getBlogPostContent
} from '@helpers/content.helpers';

import ContentList from '@components/ContentList';
import SEO from '@components/SEO';

function CategoryPage({
    groupedContent
}) {
    return ( <
        >
        <
        SEO title = "Tutorials" / >
        <
        ContentList groupedContent = {
            groupedContent
        }
        /> <
        />
    );
}

export async function getStaticProps({
    params
}) {
    const content = await getBlogPostContent();

    const groupedContentObj = content.reduce((acc, pieceOfContent) => {
        const {
            categorySlug
        } = pieceOfContent;

        acc[categorySlug] = acc[categorySlug] || {
            title: getFormattedName(categorySlug) || 'Blog',
            content: [],
        };

        acc[categorySlug].content.push(pieceOfContent);

        return acc;
    }, {});

    return {
        props: {
            groupedContent: Object.values(groupedContentObj),
        },
    };
}

export default CategoryPage;