import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'SF Pro Text, sans-serif',

        h6: {
            fontSize: 18,
            fontWeight: 600,
        },

        body1: {
            fontSize: 16,
        },

        caption: {
            fontSize: 13,
            color: '#8E8E93',
        },
    },

    palette: {
        background: {
            default: '#F5F5F7',
            paper: '#FFFFFF',
        },

        primary: {
            main: '#000000',
        },

        text: {
            primary: '#000000',
            secondary: '#8E8E93',
        },
    },

    shape: {
        borderRadius: 12,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: 40,
                    borderRadius: 12,
                    textTransform: 'none',
                    fontWeight: 500,
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },

        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                },
                input: {
                    textAlign: 'center',
                },
            },
        },
    },
});
