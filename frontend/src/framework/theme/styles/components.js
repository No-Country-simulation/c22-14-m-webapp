const components = {
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                color: 'primary',
            },
            styleOverrides: {
                root: {
                borderRadius: '8px',
                padding: '8px 16px',
                textTransform: 'none',
                },
                contained: {
                boxShadow: 'none',
                },
            },
        },
    },
}

export {components } 