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
            variants: [
                {
                    // @ts-ignore
                    props: { variant: 'text', color: 'white' },
                    style: {
                        backgroundColor: '#fff',
                        '&:hover': {
                            backgroundColor: '#fff',
                        },
                    },
                },
            ],
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

        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: 10,
                    borderRadius: 5,
                    flex: 1,
                },
                // @ts-ignore
                barColorWhite: {
                    backgroundColor: '#fff',
                },
                barColorBlack: {
                    backgroundColor: '#000',
                },
            },
        },

        MuiCheckbox: {
            styleOverrides: {
                root: {
                    margin: '5px',
                    padding: 0,
                    minWidth: 'auto',
                    '&.MuiCheckbox-colorYellowCheck': {
                        '&.Mui-checked': {
                            margin: '7px',
                            color: 'gold',
                            backgroundColor: 'black',
                            borderRadius: '4px',
                            boxShadow: 'inset 0 0 0 3px gold',
                            '& .MuiSvgIcon-root': {
                                color: 'gold',
                                fontSize: '20px',
                            },
                        },
                    },
                },
            },
        },


        MuiRadio: {
            styleOverrides: {
                root: {
                    margin: '5px',
                    padding: 0,
                    '&.MuiRadio-colorGoldDot': {
                        color: 'black',
                        '&.Mui-checked': {
                            color: 'gold',
                            '& .MuiSvgIcon-root': {
                                backgroundColor: 'gold',
                                color: 'black',
                                borderRadius: '50%',
                            },
                            boxShadow: 'inset 0 0 0 7px gold',
                        },
                    },
                },
            },
        },
    },
});
