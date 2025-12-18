import {Paper, Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { RequisitesRadioBlock } from "./RequisitesRadioBlock";

type RequisitesFieldProps = {
    label: string;
    id: number;
}

export const RequisitesField = ({ label, id }: RequisitesFieldProps) => {
    return (
        <Paper
            variant="outlined"
        >
            { id === 1 && <RequisitesRadioBlock/>}
            <Box display="flex" justifyContent="space-between" margin="15px">
                <Typography variant="body1">{label}</Typography>
                <IconButton size="small">
                    <EditIcon fontSize="small" />
                </IconButton>
            </Box>
        </Paper>
    );
};