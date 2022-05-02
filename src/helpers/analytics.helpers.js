export const GA_TRACKING_ID = 'UA-119170920-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const trackPageview = (url) => {
    if (process.env.NODE_ENV === 'production') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const trackEvent = ({
    action,
    category,
    label,
    value
}) => {
    if (process.env.NODE_ENV === 'production') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};