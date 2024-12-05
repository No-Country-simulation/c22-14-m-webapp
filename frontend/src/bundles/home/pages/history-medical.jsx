import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { HISTORY_MEDICAL } from '../../../settings';

const HistoryMedical = () => {
  const [formData, setFormData] = useState({
    consultation: '',
    diagnosis: '',
    treatment: '',
  });
  console.log(formData);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.consultation.trim()) {
      newErrors.consultation = 'El motivo de consulta es requerido.';
    }
    if (!formData.diagnosis.trim()) {
      newErrors.diagnosis = 'El diagnóstico es requerido.';
    }
    if (!formData.treatment.trim()) {
      newErrors.treatment = 'El tratamiento es requerido.';
    }
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch(HISTORY_MEDICAL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar los datos.');
      }

      alert('Expediente guardado con éxito.');
      setFormData({
        consultation: '',
        diagnosis: '',
        treatment: '',
      });
    } catch (error) {
      console.error(error);
      alert('Hubo un problema al guardar el expediente.');
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
        <Typography component="h1" variant="h4" sx={{ textAlign: 'center' }}>
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
              name="consultation"
              type="text"
              placeholder="Descripción del motivo por el cual consulta"
              value={formData.consultation}
              onChange={handleChange}
              error={Boolean(errors.consultation)}
              helperText={errors.consultation}
              variant="outlined"
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                  borderRadius: 2,
                },
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
              error={Boolean(errors.diagnosis)}
              helperText={errors.diagnosis}
              variant="outlined"
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                  borderRadius: 2,
                },
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
              placeholder="Ejemplo: Paracetamol"
              value={formData.treatment}
              onChange={handleChange}
              error={Boolean(errors.treatment)}
              helperText={errors.treatment}
              variant="outlined"
              sx={{
                '& .MuiInputBase-root': {
                  backgroundColor: 'white',
                  borderRadius: 2,
                },
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
