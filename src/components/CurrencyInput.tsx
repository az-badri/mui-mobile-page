import {Box, IconButton, InputBase, Paper, Typography} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    label: string;
    value: string;
}

export const CurrencyInput = ({ label, value }: Props) => {
    return (
        <Box width="100%">
            <Paper
                elevation={0}
            >
            <Box
                mt={1}
                display="flex"
                alignItems="center"
                px={1}
                flexDirection='column'
            >
                <Typography variant="caption">{label}</Typography>
                <Box display='flex' flexDirection='row' gap={1} alignItems='center'>
                    <Box borderRadius={2} bgcolor="#F2F2F7" margin={1}>
                      <IconButton size="small">
                      <RemoveIcon />
                      </IconButton>
                    </Box>

                    <Box>
                        <InputBase value={value} sx={{ flex: 1 }} />
                    </Box>
                    <Box borderRadius={2} bgcolor="#F2F2F7" margin={1}>
                        <IconButton size="small" >
                            <AddIcon  />
                        </IconButton>
                    </Box>
                </Box>

            </Box>
            </Paper>
        </Box>
    );
};
