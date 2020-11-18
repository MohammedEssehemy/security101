import React from 'react';

const ExternalLink = ({ href, children }) => {
    const isInternalLink = href.startsWith('/')
    const extraProps = isInternalLink ? {} : { target: '_blank', rel: 'noopener noreferrer' };
    return (<a href={href} {...extraProps}>{children}</a>);
}

export default ExternalLink;