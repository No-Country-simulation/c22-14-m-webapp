import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useSelector } from "../../common/hooks/hooks.js"

const Appointment = () => {

    const appointments = useSelector((state) => state.appointments)

    return (
        <List>
            {appointments?.map((appointment, index) => (
                <>
                    <ListItem key={index}>
                        <ListItemText
                            primary={<Typography style={{ fontWeight: 'bold', color: '#333' }}>{appointment.doctor?.firstName || "Por Asignar"}</Typography>}
                            secondary={<Typography style={{ color: '#555' }}>{appointment.date}</Typography>}
                        />
                    </ListItem>
                    <Button fullWidth>
                    Asignar médico
                    </Button>
                </>
            ))}
        </List>
    );
};

export default Appointment;