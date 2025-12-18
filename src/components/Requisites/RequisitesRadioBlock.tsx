import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const RequisitesRadioBlock = () => {
    return (
        <Box margin="10px 0 0 20px">
            <RadioGroup row>
                <FormControlLabel
                    value="card"
                    // @ts-ignore
                    control={<Radio color="goldDot" />}
                    label="Номер карты"
                />
                <FormControlLabel
                    value="contract"
                    // @ts-ignore
                    control={<Radio color="goldDot" />}
                    label="Номер договора"
                />
            </RadioGroup>
        </Box>
    )
}