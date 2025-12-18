import {Box, FormControlLabel, Radio, RadioGroup} from "@mui/material";

export const RequisitesRadioBlock = () => {
    return (
        <Box margin="5px 0 0 15px">
            <RadioGroup row>
                <FormControlLabel
                    value="card"
                    control={<Radio color='warning' />}
                    label="Номер карты"
                    checked
                />
                <FormControlLabel
                    value="contract"
                    control={<Radio color="warning" />}
                    label="Номер договора"
                />
            </RadioGroup>
        </Box>
    )
}