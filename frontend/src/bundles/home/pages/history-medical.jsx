import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

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
            <Typography variant="subtitle1" gutterBottom>
              Nombres
            </Typography>
            <TextField
              fullWidth
              name="name"
              type="text"
              placeholder="Jane"
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
              Apellidos
            </Typography>
            <TextField
              fullWidth
              name="lastname"
              type="text"
              placeholder="Doe"
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
              Género
            </Typography>
            <Select
              // value={gender}
              // onChange={handleChange}
              fullWidth
              value=""
              variant="outlined"
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
              }}
            >
              <MenuItem value="">Género</MenuItem>
              <MenuItem value="man">Masculino</MenuItem>
              <MenuItem value="woman">Femenino</MenuItem>
              <MenuItem value="no-gender">Prefiero no decirlo</MenuItem>
            </Select>
          </Box>

          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Box component="div">
              <Typography variant="subtitle1" sx={{ pb: 1 }}>
                DNI
              </Typography>
              <TextField
                fullWidth
                name="dni"
                type="text"
                placeholder="1234567"
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
                Tipo de Sangre
              </Typography>
              <TextField
                fullWidth
                name="blood"
                type="text"
                placeholder="A+"
                // value={formData.correo}
                // onChange={handleChange}
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                }}
              />
            </Box>
          </Box>

          <Box component="div">
            <Typography variant="subtitle1" sx={{ pb: 1 }}>
              Alergias
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="allergy"
              type="text"
              placeholder="No puedo tomar cierto medicamento me genera brotes"
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
              Motivo de Consulta
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="reason"
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
              Medicamentos
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="drugs"
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

          <Box component="div">
            <Typography variant="subtitle1" sx={{ pb: 1 }}>
              Diagnóstico
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="diagnostic"
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
