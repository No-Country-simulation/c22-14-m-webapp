import { Box, Button, Container, TextField, Typography } from '@mui/material';

const HistoryMedical = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
              // value={formData.correo}
              // onChange={handleChange}
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
              // value={formData.correo}
              // onChange={handleChange}
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
              placeholder="Ejemplo: Paracetamol"
              // value={formData.correo}
              // onChange={handleChange}
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
