import { Box, Typography } from "@mui/material";
import { CurrencyInput } from "./CurrencyInput";

export const AmountSection = () =>{
    return (
        <Box display="flex" flexDirection="row" gap={2}>
                <Box>
                    <Typography variant="caption">Отдаете(лот 1000)</Typography>
                    <CurrencyInput
                        label="Ethereum, ETH"
                        value="1300.00000"
                    />
                </Box>
                <Box>
                    <Typography variant="caption" display='flex' justifyContent='end'>Получаете(лот 1000)</Typography>
                    <CurrencyInput
                        label="Рубль, RUR"
                        value="1200.00"
                    />
                </Box>

        </Box>
    )
}