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
import { SectionCard } from '../components/SectionCard';
import { CurrencyInput } from '../components/CurrencyInput';
import { TextInput } from '../components/TextInput';

export const WithdrawPage = () => {
    return (
        <Container maxWidth="sm">
            <Box py={2} display="flex" flexDirection="column" gap={3}>
                {/* Способ вывода */}
                <Box>
                    <Typography variant="h6" mb={2}>
                        Способ вывода
                    </Typography>
                    <SegmentedControl />
                </Box>

                {/* Банк */}
                <SectionCard
                    title="Альфа-банк cash-in"
                    subtitle="1 USDT = 61.55 RUR"
                />

                {/* Объемы */}
                <Box>
                    <Typography mb={2}>Объемы</Typography>

                    <Box display="flex" gap={2}>
                        <CurrencyInput
                            label="Ethereum, ETH"
                            value="1300.00000"
                        />
                        <CurrencyInput
                            label="Рубль, RUR"
                            value="1200.00"
                        />
                    </Box>

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

                {/* Реквизиты */}
                <Box>
                    <Typography mb={2}>Реквизиты</Typography>

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
