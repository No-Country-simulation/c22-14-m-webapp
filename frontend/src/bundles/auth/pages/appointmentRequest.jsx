import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    Select,
    MenuItem,
    useTheme,
    useMediaQuery,
    InputLabel,
    FormControl,
    TextareaAutosize,
} from '../../common/components/components.jsx';
import { useNavigate } from 'react-router-dom';
import { FEAT_APPOIMENT } from '../../../settings.js';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


const AppoimentRequest = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLarge = useMediaQuery(theme.breakpoints.down('sm'));

    const CONTAINER_APPOIMENT_REQUEST_STYLES = { "&": { padding: '0 3%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%', marginBottom: '5%', width: '35%', background: '#ffffff', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)', borderRadius: '4%' }
    const BOX_APPOIMENT_REQUEST_STYLES = { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80%', paddingBottom: '18%' }
    const TYPOGRAPHY_APPOIMENT_REQUEST_STYLES = { display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: isSmall ? '5%' : '10%', textAlign: 'center', color: '#bdbdbd', '& .MuiTypography-root': { fontSize: isSmall ? '30px' : isMedium ? '33px' : isLarge ? '38px' : '38px', } }
    const TEXTFIELD_APPOIMENT_REQUEST_STYLES = { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isSmall ? '20px' : isMedium ? '30px' : '35px', width: '100%', paddingBottom: isSmall ? '5%' : '10%', '& .MuiTextField-root': { width: '100%', '& .MuiOutlinedInput-root': { boxShadow: '0px 5px 20px #00000074' } }, "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#E0E3E7" }, "&:hover fieldset": { borderColor: "#E0E3E7" } } }
    const FORM_APPOIMENT_REQUEST_STYLES = { width: '100%' }
    const TEXTAREA_APPOINTMENT_STYLES = { width: '100%', display: 'flex', flexDirection: 'column' }
    const BUTTON_APPOIMENT_REQUEST_STYLES = { display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', background: '#3f51b5' }

    const [especialidad, setEspecialidad] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [rangeHours, setRangeHours] = useState("");
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        especialty: "",
        email: "",
        requiredDateTime: dayjs(""),
        rangeHours: "",
        description: "",
        doctor_id: "",
        state: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateTimeChange = (newValue) => {
        if (newValue && dayjs(newValue).isValid()) {
            setFormData(prevData => ({
                ...prevData,
                requiredDateTime: dayjs(newValue).format('YYYY-MM-DD'),
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                requiredDateTime: "",
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Object.values(formData).some(field => !field)) {
            setErrorMessage("Por favor, completa todos los campos.");
            return;
        } try {
            const response = await fetch(`${FEAT_APPOIMENT}`, {
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

            navigate('/home');
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(error.message);
        }
    };

    return (
        <Container sx={CONTAINER_APPOIMENT_REQUEST_STYLES}>
            <Box sx={BOX_APPOIMENT_REQUEST_STYLES} componet="from" onSubmit={handleSubmit}>
                <Box sx={TEXTFIELD_APPOIMENT_REQUEST_STYLES}>
                    <Box sx={TYPOGRAPHY_APPOIMENT_REQUEST_STYLES}>
                        <Typography variant="h3" component="h1">
                            Solicite su cita
                        </Typography>
                    </Box>
                    <TextField
                        label="Nombre Completo"
                        type="text"
                        name="fullName"
                        size="small"
                        value={formData.fullName}
                        onChange={handleChange}
                        helperText={errorMessage}
                        required
                    />
                    <TextField
                        label="Numero de telefono"
                        type="text"
                        name="phoneNumber"
                        size="small"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        helperText={errorMessage}
                        required
                    />
                    <TextField
                        label="Email"
                        type="text"
                        name="email"
                        size="small"
                        value={formData.email}
                        onChange={handleChange}
                        helperText={errorMessage}
                        required
                    />
                    <FormControl sx={FORM_APPOIMENT_REQUEST_STYLES}>
                        <InputLabel>Seleccione la Especialidad</InputLabel>
                        <Select
                            value={especialidad}
                            label="Seleccione la Especialidad"
                            onChange={(e) => setEspecialidad(e.target.value)}
                        >
                            <MenuItem value="choiceA">Medico General</MenuItem>
                            <MenuItem value="choiceB">Psicologo</MenuItem>
                            <MenuItem value="choiceC">Psiquiatra</MenuItem>
                            <MenuItem value="choiceD">Nutricionista</MenuItem>
                            <MenuItem value="choiceE">NO APLICA</MenuItem>
                        </Select>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Fecha"
                            value={formData.requiredDateTime ? dayjs(formData.requiredDateTime) : null}
                            onChange={handleDateTimeChange}
                            slots={{
                                textField: (props) => <TextField {...props} fullWidth size="small" />,
                            }}
                        />
                    </LocalizationProvider>
                    <FormControl sx={FORM_APPOIMENT_REQUEST_STYLES}>
                        <InputLabel>Seleccione el rango de hora</InputLabel>
                        <Select
                            value={rangeHours}
                            label="Seleccione el rango de hora"
                            onChange={(e) => setRangeHours(e.target.value)}
                        >
                            <MenuItem value="morning">Mañana ( 8hs / 11hs )</MenuItem>
                            <MenuItem value="day">Tarde temprana ( 11hs / 14hs )</MenuItem>
                            <MenuItem value="afternoon">Tarde ( 14hs / 17hs )</MenuItem>
                            <MenuItem value="any">Cualquier horario</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={TEXTAREA_APPOINTMENT_STYLES}>
                        <TextareaAutosize
                            value={formData.description}
                            onChange={handleChange}
                            name="description"
                            placeholder="Motivo de la consulta"
                            minRows={3}
                            required
                        >
                        </TextareaAutosize>
                    </Box>
                </Box>
                <Button sx={BUTTON_APPOIMENT_REQUEST_STYLES}
                    type="submit"
                    variant="contained"
                    size="large"
                >
                    Solicitar
                </Button>
            </Box>
        </Container>
    )
};

export { AppoimentRequest }