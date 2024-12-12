
import {
  Box,
  Grid2,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import { AppointmentModal } from '../components/appointmentModal';
import { useState } from 'react';
import { useSelector } from '../../common/hooks/hooks.js';

const Patient = () => {
    const user = useSelector((state) => state.user.user)

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log("user", user)

  return (
    <Box>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid2  container spacing={2} sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                },
                gap: 4,
                maxWidth: 'lg',}}>
                    
            {/* Upcoming Appointments */}
            <Grid2 xs={12} md={6} lg={4}>
                <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Proximas citas
                    </Typography>
                    <List>
                    <ListItem>
                        <ListItemText
                        primary="hannibal"
                        secondary="Enero 15, 2025 - 10:00 AM"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                        primary="Jack"
                        secondary="Febrero 20, 2025 - 2:00 PM"
                        />
                    </ListItem>
                    </List>
                    <Button variant="contained" color="primary" fullWidth>
                    Programar cita
                    </Button>
                </CardContent>
                </Card>
            </Grid2>

            {/* Medical History */}
            <Grid2 xs={12} md={6} lg={4}>
                <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Ultimos registros
                    </Typography>
                    <List>
                    <ListItem>
                        <ListItemText
                        primary="Control anual"
                        secondary="Noviembre 5, 2024"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                        primary="Analisis de sangre"
                        secondary="Octubre 10, 2024"
                        />
                    </ListItem>
                    </List>
                    <Button variant="outlined" color="primary" fullWidth>
                    Ver historial completo
                    </Button>
                </CardContent>
                </Card>
            </Grid2>

            {/* Actions */}
            <Grid2 xs={12} md={6} lg={4}>
                <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Acciones
                    </Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ mb: 2 }}
                    onClick={() => handleOpen()}
                    >
                    Programar nueva cita
                    </Button>
                    <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{ mb: 2 }}
                    >
                    Cancelar cita
                    </Button>
                </CardContent>
                </Card>
            </Grid2>
            </Grid2>
        </Container>
      {open && <AppointmentModal handleOpen={handleOpen} handleClose={handleClose}/>}
    </Box>
  );
};

export default Patient;
