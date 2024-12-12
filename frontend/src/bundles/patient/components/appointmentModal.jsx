import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useSelector } from '../../common/hooks/hooks.js';
import { format } from 'date-fns';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const AppointmentModal = ({ handleClose }) => {

  const user = useSelector((state) => state.user.user)

  const [formData, setFormData] = React.useState({
    especialidad: '',
    rangeHours: '',
    description: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prevData => ({
      ...prevData,
      birthDate: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const date = new Date("2024-12-01T03:00:00.000Z");
  const formattedDate = format(date, "dd-MM-yyyy");

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={style}>
            <Box component="form" onSubmit={handleSubmit}>
                <Typography variant="h4" component="h1" textAlign="center" sx={{ marginBottom: 3 }}>
                    Solicite su cita
                </Typography>

                <Typography>Nombre: {user?.firstName} {user?.lastName}</Typography>
                <Typography>Correo: {user?.email}</Typography>
                <Typography>Teféfono: {user?.patient.phoneNumber}</Typography>
                <Typography>Fecha de nacimiento: {formattedDate}</Typography>

                <FormControl fullWidth margin="normal">
                    <InputLabel>Especialidad</InputLabel>
                    <Select
                    value={formData.especialidad}
                    onChange={handleChange}
                    name="especialidad"
                    label="Especialidad"
                    required
                    >
                        <MenuItem value="medico">Médico General</MenuItem>
                        <MenuItem value="psicologo">Psicólogo</MenuItem>
                        <MenuItem value="psiquiatra">Psiquiatra</MenuItem>
                        <MenuItem value="nutricionista">Nutricionista</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <DatePicker
                    label="Fecha de nacimiento"
                    value={formData.birthDate}
                    onChange={handleDateChange}
                    required
                    renderInput={(props) => <TextField {...props} />}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="rango-horario-label">Rango Horario</InputLabel>
                    <Select
                    labelId="rango-horario-label"
                    value={formData.rangeHours}
                    onChange={handleChange}
                    name="rangeHours"
                    label="Rango Horario"
                    required
                    >
                    <MenuItem value="morning">Mañana (8 hs / 11 hs)</MenuItem>
                    <MenuItem value="afternoon">Tarde (14 hs / 17 hs)</MenuItem>
                    <MenuItem value="evening">Noche (17 hs / 20 hs)</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <TextareaAutosize
                    minRows={4}
                    placeholder="Descripción del motivo de la cita"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', borderColor: '#ccc' }}
                    />
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <Button type="submit" variant="contained" color="primary" sx={{ width: '50%' }}>
                    Solicitar
                    </Button>
                </Box>
            </Box>
        </Box>
    </Modal>
  );
}

export { AppointmentModal }