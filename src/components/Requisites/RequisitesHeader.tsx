import { Box, Checkbox, Typography } from '@mui/material';

export const RequisitesHeader = () => (
    <Box className="RequisitesOption-root" display="flex" justifyContent="space-between" alignItems='center'>
        <Typography variant="h6" mb={2}>
            Реквизиты
        </Typography>
        <Box className="RequisitesOption-right" display="flex" flexDirection="row" alignItems="center" justifyContent='end'>
            <Typography className="RequisitesOption-label" color='gray'>
                Сохранить реквизиты
            </Typography>
            <Checkbox
                defaultChecked
                className="RequisitesOption-checkbox"
                color="yellowCheck"
            />
        </Box>
    </Box>
);
