import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HISTORY_MEDICAL } from '../../../settings';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

const HistoryMedical = () => {
  const { appoiment_id } = useParams();

  const [formData, setFormData] = useState({
    reason: '',
    treatment: '',
    diagnosis: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === '')) {
      alert('Por favor, completa todos los campos antes de guardar.');
      return;
    }try {
      const response = await fetch(`${ HISTORY_MEDICAL } / ${appoiment_id}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });


      if (!response.ok) {
          throw new Error("Error en enviar la solicitud. Por favor intenta nuevamente.");
      }

      const data = await response.json();
      console.log("Solicitud enviada:", data);

  } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
  }
};


  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#C5CAE9',
        py: 4,
      }}
    >
      <Container component="div" maxWidth="sm">
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
          Historial Médico
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 3 }}
        >
        <Box component="div">
            <Typography variant="subtitle1" sx={{ pb: 1 }}>
              Motivo de Consulta
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="reason"
              type="text"
              placeholder="Descripción del motivo por el cual consulta"
              value={formData.reason}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            />
          </Box>

          <Box component="div">
            <Typography variant="subtitle1" sx={{ pb: 1 }}>
              Tratamiento
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="treatment"
              type="text"
              placeholder="Ejemplo: se receto, Paracetamol."
              value={formData.treatment}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            />
          </Box>

          <Box component="div">
            <Typography variant="subtitle1" sx={{ pb: 1 }}>
              Diagnóstico
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="diagnosis"
              type="text"
              placeholder="Indicaciones de reposo y/o medicación"
              value={formData.diagnosis}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              backgroundColor: '#3F51B5',
              '&:hover': {
                backgroundColor: '#303F9F',
              },
            }}
          >
            Guardar Expediente
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HistoryMedical;
