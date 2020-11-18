export default {
    colors: {
        text: '#fff',
        background: '#000',
        primary: '#07c',
        secondary: '#80c',
        muted: '#f6f6ff',
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit',
        monospace: '"Roboto Mono", Menlo, monospace',
        ui: 'system-ui, sans-serif',
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontWeights: {
        body: 500,
        heading: 700,
        bold: 700,
    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
    },
    styles: {
        Slide: {
            fontFamily: 'body',
            fontSize: [3, 4, 5, 6],
            paddingRight: '2rem',
            paddingLeft: '2rem',
            paddingTop: '1rem',
            paddingBottom: '1rem',
        },
        h1: {
            variant: 'text.heading',
        },
        h2: {
            variant: 'text.heading',
        },
        h3: {
            variant: 'text.heading',
        },
        h4: {
            variant: 'text.heading',
        },
        h5: {
            variant: 'text.heading',
        },
        h6: {
            variant: 'text.heading',
        },
        a: {
            color: 'primary',
        },
        ul: {
            m: 0,
        },
        li: {
            m: 3,
            fontSize: '2.2rem',
            marginBottom: '2rem'
        },
        ol: {
            m: 0,
        },
        inlineCode: {
            fontFamily: 'monospace',
        },
        code: {
            fontFamily: 'monospace',
        },
        pre: {
            fontFamily: 'monospace',
            p: 3,
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            paddingRight: '.5em',
            paddingTop: '.25em',
            paddingBottom: '.25em',
            borderBottom: '1px solid',
            verticalAlign: 'top',
        },
        td: {
            textAlign: 'left',
            paddingRight: '.5em',
            paddingTop: '.25em',
            paddingBottom: '.25em',
            borderBottom: '1px solid',
            verticalAlign: 'top',
        },
        blockquote: {
            fontWeight: 'bold',
        },
    },
}