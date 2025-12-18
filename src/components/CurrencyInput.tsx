import { Box, IconButton, InputBase, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    label: string;
    value: string;
}

export const CurrencyInput = ({ label, value }: Props) => {
    return (
        <Box width="100%">
            <Typography variant="caption">{label}</Typography>

            <Box
                mt={1}
                display="flex"
                alignItems="center"
                bgcolor="#F2F2F7"
                borderRadius={2}
                px={1}
            >
                <IconButton size="small">
                    <RemoveIcon />
                </IconButton>

                <InputBase value={value} sx={{ flex: 1 }} />

                <IconButton size="small">
                    <AddIcon />
                </IconButton>
            </Box>
        </Box>
    );
};
