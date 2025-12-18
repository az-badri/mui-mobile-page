import { Box, Paper, Typography, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const AccountSelect = () => {
    return (
        <Paper
            elevation={0}
        >
            <Box
                display="flex"
                alignItems="center"
                p={2}
                gap={2}
            >
                <Box
                    width={30}
                    height={30}
                    borderRadius="50%"
                    bgcolor="#5B6EA6"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="#fff"
                    fontWeight={600}
                    fontSize={18}
                >
                    ₽
                </Box>

                <Box flex={1}>
                    <Typography fontWeight={500}>
                        Альфа-банк cash-in
                    </Typography>
                    <Typography variant="caption">
                        1 USDT = 61.55 RUR
                    </Typography>
                </Box>

                <IconButton size="small">
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>
        </Paper>
    );
};
