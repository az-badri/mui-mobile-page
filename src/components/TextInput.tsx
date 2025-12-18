import { Box, InputBase } from '@mui/material';

interface Props {
    placeholder: string;
}

export const TextInput = ({ placeholder }: Props) => {
    return (
        <Box
            bgcolor="#F2F2F7"
            borderRadius={2}
            px={2}
            py={1.5}
        >
            <InputBase
                fullWidth
                placeholder={placeholder}
            />
        </Box>
    );
};
