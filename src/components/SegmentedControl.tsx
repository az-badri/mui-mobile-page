import {Box, Button, Typography} from '@mui/material';

const items = ['Банки', 'Наличные', 'Курьер'];

export const SegmentedControl = () => {
    const isBank= (index: number) => index === 0;
    return (
        <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="h6" mb={2}>
                Способ вывода
            </Typography>
            <Box display='flex' flexDirection="row" gap={1}>
                {items.map((item, index) => (
                        <Button
                            key={item}
                            color={isBank(index) ? 'primary' : 'white' }
                            variant={isBank(index) ? 'contained' : "text"}
                        >
                            {item}
                        </Button>
                ))}
            </Box>
        </Box>
    );
};
