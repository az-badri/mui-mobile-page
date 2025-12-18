import { Paper, Box, Typography } from '@mui/material';

interface Props {
    title: string;
    subtitle?: string;
}

export const SectionCard = ({ title, subtitle }: Props) => {
    return (
        <Paper elevation={0}>
            <Box p={2}>
                <Typography>{title}</Typography>
                {subtitle && (
                    <Typography variant="caption">{subtitle}</Typography>
                )}
            </Box>
        </Paper>
    );
};
