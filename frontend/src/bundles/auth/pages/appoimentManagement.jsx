import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { AppRoute } from "../../common/constants/app-route/app-route";

const AppoimentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`${ APPOIMENT_MANAGEMENT }`);
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error al obtener las citas:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleAssignDoctor = (appointmentId) => {
    navigate(`${AppRoute.DOCTOR_SELECTION}/${appointmentId}`);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Gestión de Citas - Administrador
      </Typography>
      <Grid container spacing={3}>
        {appointments.map((appointment) => (
          <Grid item xs={12} md={6} key={appointment.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Paciente: {appointment.patient_name}
                </Typography>
                <Typography variant="body1">
                  Teléfono: {appointment.patient_phone}
                </Typography>
                <Typography variant="body1">
                  Email: {appointment.patient_email}
                </Typography>
                <Typography variant="body1">
                  Especialidad requerida: {appointment.specialty}
                </Typography>
                <Box>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Fecha: {new Date(appointment.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1">
                    Hora: {appointment.hours}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAssignDoctor(appointment.id)}
                >
                  Asignar Doctor
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export { AppoimentManagement };
