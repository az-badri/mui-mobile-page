import {
    Box,
    Container,
    Typography,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
} from '@mui/material';

import { SegmentedControl } from '../components/SegmentedControl';
import { TextInput } from '../components/TextInput';
import {AccountSelect} from "../components/AccountSelect";
import {AmountSection} from "../components/AmountSection";

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

                    <Box display="flex" gap={1} mt={2}>
                        {['min', '50%', '75%', 'max'].map((item, i) => (
                            <Button
                                key={item}
                                fullWidth
                                variant={i === 1 ? 'contained' : 'outlined'}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
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
