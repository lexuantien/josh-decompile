import React from 'react';

import {
    CATEGORIES,
    getFormattedName,
} from '@helpers/category.helpers';
import {
    getBlogPostContent
} from '@helpers/content.helpers';

import AllContentInCategory from '@components/AllContentInCategory';

function CategoryPage({
    categorySlug,
    content
}) {
    return ( <
        AllContentInCategory categoryTitle = {
            getFormattedName(categorySlug)
        }
        content = {
            content
        }
        />
    );
}

export async function getStaticProps({
    params
}) {
    const content = await getBlogPostContent({
        categories: [{
            slug: params.categorySlug
        }],
    });

    return {
        props: {
            categorySlug: params.categorySlug,
            content,
        },
    };
}

export function getStaticPaths() {
    const paths = CATEGORIES.map((cat) => ({
        params: {
            categorySlug: cat.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export default CategoryPage;