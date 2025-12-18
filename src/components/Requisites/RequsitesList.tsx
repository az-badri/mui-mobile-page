import { Box } from '@mui/material';
import { RequisitesField } from "./RequisitesField";

const editableFields = [
    { id: 'card', label: 'Номер карты', field_id: 1 },
    { id: 'name', label: 'ФИО владельца', field_id: 2 },
    { id: 'address', label: 'Адрес', field_id: 3 },
];

export const RequisitesList = () => {
    return (
        <Box display="flex" flexDirection="column" gap={2} mt={2}>
            {editableFields.map((field, index) => (
                <RequisitesField key={field.id} label={field.label} id={field.field_id}/>
            ))}
        </Box>
    );
};