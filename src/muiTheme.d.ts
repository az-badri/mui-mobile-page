import '@mui/material/Button';
import '@mui/material/LinearProgress';
import '@mui/material/Button';
import '@mui/material/Checkbox';
import '@mui/material/LinearProgress';
import '@mui/material/Radio';

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}

declare module '@mui/material/LinearProgress' {
    interface LinearProgressPropsColorOverrides {
        white: true;
    }
}

// Для Checkbox
declare module '@mui/material/Checkbox' {
    interface CheckboxPropsColorOverrides {
        yellowCheck: true;
    }
}

// Для Radio
declare module '@mui/material/Radio' {
    interface RadioPropsColorOverrides {
        goldDot: true;
    }
}