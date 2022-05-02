/**
 * A navlink is like a Link, but it checks to see if this link is
 * "current". Meant for navigation, to allow the link to serve
 * as an indicator of which page the person is at.
 */

import React from 'react';
import {
    useRouter
} from 'next/router';

import Link from '../Link';

const Navlink = ({
    href,
    getProps,
    ...delegated
}) => {
    const router = useRouter();
    // Strip trailing slashes, for consistency.
    const isCurrent =
        router.pathname.replace(/\/$/, '') === href.replace(/\/$/, '');

    React.useEffect(() => {
        if (typeof getProps === 'function') {
            getProps({
                isCurrent
            });
        }
    }, [isCurrent]);

    return <Link href = {
        href
    } { ...delegated
    }
    />;
};

export default Navlink;