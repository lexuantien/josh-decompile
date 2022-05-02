import React from 'react';

import TextLink from '../TextLink';

const PostLink = (props) => {
    return <TextLink showPreview = {
        props.showPreview
    } { ...props
    }
    />;
};

export default PostLink;