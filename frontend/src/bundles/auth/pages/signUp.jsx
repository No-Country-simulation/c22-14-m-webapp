import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from '../../common/components/components';
import { useNavigate } from 'react-router-dom';
import { SIGN_UP } from '../../../settings';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        dni: "",
        phoneNumber: "",
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const savedFormData = localStorage.getItem('signUpFormData');
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('signUpFormData', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (Object.values(formData).some(field => !field)) {
            setErrorMessage("Por favor, completa todos los campos requeridos.");
            return;
        }

        try {
            // Enviar datos al servidor
            const response = await fetch(`${SIGN_UP}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error en el registro. Por favor intenta nuevamente.");
            }

            const data = await response.json();
            console.log("Registro exitoso:", data);

            localStorage.removeItem('signUpFormData');
            navigate('/sign-up');
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(error.message);
        }
    };
    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 4, mx: "auto", maxWidth: '50vh', p: 3, boxShadow: 2 }}
            >
                <Typography variant="h5" align="center">
                    Regístrate en Telemedicina
                </Typography>

                {errorMessage && (
                    <Typography color="error" align="center" sx={{ mb: 2 }}>
                        {errorMessage}
                    </Typography>
                )}

                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Fecha de nacimiento"
                    variant="outlined"
                    type="date"
                    fullWidth
                    margin="normal"
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="DNI"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                />
                <TextField
                    label="Número de teléfono"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <TextField
                    label="Correo electrónico"
                    variant="outlined"
                    type="email"
                    fullWidth
                    margin="normal"
                    size="small"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    size="small"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth size="small"> Regístrate </Button>
            </Box>
        </>
    )
}

export { SignUp }