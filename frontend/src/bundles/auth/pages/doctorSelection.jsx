import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { DOCTOR_SELECTION ,  DOCTOR_ASSING } from "../../../settings";

const DoctorSelection = () => {
  const { appointmentId } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${DOCTOR_SELECTION}?appointmentId=${appointmentId}`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error al obtener los médicos:", error);
        setError("Hubo un problema al cargar los datos de los doctores.");
      }
    };
  
    fetchDoctors();
  }, [appointmentId]);

  const handleAssignDoctor = async () => {
    if (!selectedDoctor) {
      alert("Selecciona un doctor para asignar.");
      return;
    }
    try {
      const response = await fetch(`${ DOCTOR_ASSING }`, { 
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorId: selectedDoctor }),
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        throw new Error("Error al asignar el doctor.");
      }
    } catch (err) {
      console.error("Error al asignar el doctor:", err);
      setError("Hubo un problema al asignar el doctor.");
    }
  };

  return (
    <Container>
        <Typography variant="h5" sx={{ mb: 4 }}>
            Selección de Doctor
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
          ) : (
            <List>
                {doctors.map((doctor) => (
                    <ListItem
                    key={doctor.id}
                    onClick={() => setSelectedDoctor(doctor.id)}
                    selected={selectedDoctor === doctor.id}
                    button
                    >
                    <ListItemText
                        primary={`${doctor.User?.name || 'Nombre no disponible'} (${doctor.specialty})`}
                        secondary={`Licencia: ${doctor.lisenceNumber || 'No especificada'}`}
                    />
                    </ListItem>
                ))}
            </List>
          )}
          <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
              <Button variant="contained" color="primary" onClick={handleAssignDoctor}>
                Asignar Doctor
              </Button>
              <Button variant="outlined" onClick={() => window.history.back()}>
                Cancelar
              </Button>
          </Box>

      <Snackbar open={Boolean(error)} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
      
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success" onClose={() => window.history.back(setSuccess(false))}>
          Doctor asignado correctamente.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export { DoctorSelection };
