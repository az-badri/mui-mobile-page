import '@mui/material/LinearProgress';

declare module '@mui/material/LinearProgress' {
    interface LinearProgressPropsColorOverrides {
        white: true;
        black: true;
    }
}