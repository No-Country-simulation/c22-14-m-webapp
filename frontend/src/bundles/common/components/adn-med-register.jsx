import React, { useState } from 'react';
import "../../../styles/register-medic-adn.css";

import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from '@mui/material';

export default function RegisterMedicAdminForm() {
  const [rol, setRol] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <Box className="form-container" sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography sx={{ textAlign: 'center' }} variant="h4" component="h1" gutterBottom>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="DNI"
          type='number'
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Licencia Médica"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Nombre"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Apellidos"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Correo"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Teléfono"
          variant="outlined"
          type="tel"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Enlace a Calendly"
          variant="outlined"
          placeholder="https://calendly.com/your-link"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Seleccione el Rol</InputLabel>
          <Select
            value={rol}
            label="Dropdown 1"
            onChange={(e) => setRol(e.target.value)}
          >
            <MenuItem value="administrador">Administrador</MenuItem>
            <MenuItem value="medico">Medico</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Seleccione la Especialidad</InputLabel>
          <Select
            value={especialidad}
            label="Dropdown 2"
            onChange={(e) => setEspecialidad(e.target.value)}
          >
            <MenuItem value="choiceA">Medico General</MenuItem>
            <MenuItem value="choiceB">Psicologo</MenuItem>
            <MenuItem value="choiceC">Psiquiatra</MenuItem>
            <MenuItem value="choiceC">Nutricionista</MenuItem>
            <MenuItem value="choiceC">NO APLICA</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          className="btn-register"
          variant="contained"
          color="dark"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          Registrar Usuario
        </Button>
      </form>
    </Box>
  );
}

