import {
    Box,
    Container,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material';

import { SegmentedControl } from '../components/SegmentedControl';
import { TextInput } from '../components/TextInput';
import { AccountSelect } from "../components/AccountSelect";
import { AmountSection } from "../components/AmountSection";
import { SegmentedBar } from "../components/SegmentedBar";

export const WithdrawPage = () => {
    return (
        <Container maxWidth="sm">
            <Box py={2} display="flex" flexDirection="column" gap={3}>
                <Box>
                    <Typography variant="h6" mb={2}>
                        Способ вывода
                    </Typography>
                    <SegmentedControl />
                </Box>

                <AccountSelect />

                <Box>
                    <Typography variant="h6" mb={2}>
                        Объемы
                    </Typography>

                    <AmountSection />
                    <SegmentedBar/>
                </Box>

                <Box>
                    <Typography variant="h6" mb={2}>
                        Реквизиты
                    </Typography>
                    <RadioGroup row>
                        <FormControlLabel
                            value="card"
                            control={<Radio />}
                            label="Номер карты"
                        />
                        <FormControlLabel
                            value="contract"
                            control={<Radio />}
                            label="Номер договора"
                        />
                    </RadioGroup>

                    <Box display="flex" flexDirection="column" gap={2} mt={2}>
                        <TextInput placeholder="Номер карты" />
                        <TextInput placeholder="ФИО владельца" />
                        <TextInput placeholder="Адрес" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};
