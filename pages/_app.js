import React from 'react';
import {
    ThemeProvider
} from 'styled-components';
import {
    useRouter
} from 'next/router';

import {
    THEME
} from '@constants';
import {
    trackPageview
} from '@helpers/analytics.helpers';

import {
    AnalyticsProvider
} from '@components/AnalyticsContext';
import {
    ConfigProvider,
    ConfigContext,
} from '@components/ConfigContext';
import GlobalStyles from '@components/GlobalStyles';

import 'typeface-sriracha';
import 'focus-visible';
import 'tippy.js/dist/tippy.css';
import '@reach/tabs/styles.css';

function App({
    Component,
    pageProps
}) {
    const router = useRouter();

    React.useEffect(() => {
        const handleRouteChange = (url) => {
            trackPageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return ( <
        ThemeProvider theme = {
            THEME
        } >
        <
        AnalyticsProvider >
        <
        ConfigProvider >
        <
        Component { ...pageProps
        }
        /> { /* TODO: real prop value */ } <
        GlobalStyles allowColorTransitions = {
            true
        }
        /> <
        /ConfigProvider> <
        /AnalyticsProvider> <
        /ThemeProvider>
    );
}

export default App;