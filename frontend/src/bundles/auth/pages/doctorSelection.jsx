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
} from "@mui/material";
import { DOCTOR_SELECTION } from "../../../settings";

const DoctorSelection = () => {
  const { appointmentId } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${DOCTOR_SELECTION}?appointmentId=${appointmentId}`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error al obtener los médicos:", error);
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
      const response = await fetch(`${ DOCTOR_SELECTION }`, { //ruta de jaime para asignar el doctor al appoinment
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorId: selectedDoctor }),
      });
      if (response.ok) {
        alert("Doctor asignado correctamente.");
      } else {
        throw new Error("Error al asignar el doctor.");
      }
    } catch (error) {
      console.error("Error al asignar el doctor:", error);
    }
  };

  return (
    <Container>
        <Typography variant="h5" sx={{ mb: 4 }}>
            Selección de Doctor
        </Typography>
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
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
            <Button variant="contained" color="primary" onClick={handleAssignDoctor}>
            Asignar Doctor
            </Button>
            <Button variant="outlined" onClick={() => window.history.back()}>
            Cancelar
            </Button>
        </Box>
    </Container>
  );
};

export { DoctorSelection };
