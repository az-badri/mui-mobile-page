import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme/theme';
import { WithdrawPage } from './pages/WithdrawPage';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <WithdrawPage />
        </ThemeProvider>
    );
}
