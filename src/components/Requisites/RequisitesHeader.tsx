import { Box, Checkbox, Typography } from '@mui/material';

export const RequisitesHeader = () => (
    <Box className="RequisitesOption-root" display="flex" justifyContent="space-between" alignItems='center'>
        <Typography variant="h6" mb={2}>
            Реквизиты
        </Typography>
        <Box className="RequisitesOption-right" display="flex" flexDirection="row" alignItems="center">
            <Typography className="RequisitesOption-label">
                Сохранить реквизиты
            </Typography>
            <Checkbox
                color="warning"
                defaultChecked
                className="RequisitesOption-checkbox"
            />
        </Box>
    </Box>
);
