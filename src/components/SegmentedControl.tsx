import { Box, Button } from '@mui/material';

const items = ['Банки', 'Наличные', 'Курьер'];

export const SegmentedControl = () => {
    return (
        <Box display="flex" gap={1}>
            {items.map((item, index) => (
                <Button
                    key={item}
                    variant={index === 0 ? 'contained' : 'outlined'}
                >
                    {item}
                </Button>
            ))}
        </Box>
    );
};
