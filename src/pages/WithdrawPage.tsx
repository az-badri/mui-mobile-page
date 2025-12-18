import {
    Box,
    Container,
} from '@mui/material';

import { SegmentedControl } from '../components/SegmentedControl';
import { AccountSelect } from "../components/AccountSelect";
import { AmountSection } from "../components/AmountSection";
import { SegmentedBar } from "../components/SegmentedBar";
import { RequisitesHeader } from "../components/Requisites/RequisitesHeader";
import { RequisitesList } from "../components/Requisites/RequsitesList";

export const WithdrawPage = () => {
    return (
        <Container maxWidth="sm">
            <Box py={2} display="flex" flexDirection="column" gap={3}>
                <SegmentedControl />
                <AccountSelect />
                <Box>
                    <AmountSection />
                    <SegmentedBar/>
                </Box>
                <Box>
                    <RequisitesHeader/>
                    <RequisitesList/>
                </Box>
            </Box>
        </Container>
    );
};
