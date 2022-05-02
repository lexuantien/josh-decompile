import React from 'react';

import {
    getBlogPostContent
} from '@helpers/content.helpers';

import SEO from '@components/SEO';
import ContentList from '@components/ContentList';

const Latest = ({
    content
}) => {
    return ( <
        >
        <
        SEO title = "Latest Articles and Tutorials" / >

        <
        ContentList groupedContent = {
            [{
                title: 'Latest Content',
                content,
            }, ]
        }
        /> <
        />
    );
};

export async function getStaticProps() {
    const content = await getBlogPostContent();

    return {
        props: {
            content
        },
    };
}

export default Latest;