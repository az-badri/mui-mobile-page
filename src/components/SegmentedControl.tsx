import { Box, Button } from '@mui/material';

const items = ['Банки', 'Наличные', 'Курьер'];

export const SegmentedControl = () => {
    const isBank= (index: number) => index === 0;
    return (
        <Box display="flex" gap={1}>
            {items.map((item, index) => (
                <Button
                    key={item}
                    // @ts-ignore
                    color={isBank(index) ? 'primary' : 'white' }
                    variant={isBank(index) ? 'contained' : "text"}
                >
                    {item}
                </Button>
            ))}
        </Box>
    );
};
