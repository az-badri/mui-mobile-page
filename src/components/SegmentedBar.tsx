import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export const SegmentedBar = () => {
        return (
            <Box width="100%" marginTop="10px">
                <Stack direction="row" spacing={1}>
                    <Box width="25%" >
                        <LinearProgress variant="determinate" value={100} />
                        <Box display='flex' justifyContent='center'>
                            <Typography variant="caption" color="text.secondary">min</Typography>
                        </Box>
                    </Box>
                    <Box width="25%">
                        <LinearProgress variant="determinate" value={100} />
                        <Box display='flex' justifyContent='center'>
                            <Typography variant="caption" color="text.secondary">50%</Typography>
                        </Box>
                    </Box>
                    <Box width="25%">
                        <LinearProgress variant="determinate" value={100} color="white" />
                        <Box display='flex' justifyContent='center'>
                            <Typography variant="caption" color="text.secondary">75%</Typography>
                        </Box>
                    </Box>
                    <Box width="25%">
                        <LinearProgress variant="determinate" value={100} color="white" />
                        <Box display='flex' justifyContent='center'>
                            <Typography variant="caption" color="text.secondary">max</Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        );

}