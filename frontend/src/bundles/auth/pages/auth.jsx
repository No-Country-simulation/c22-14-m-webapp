import React, { useState, useEffect } from 'react';
import { Button, Link, Container, TextField, Typography, Box } from '../../common/components/components';
import { Navigate } from 'react-router-dom';
import { SIGN_IN } from '../../../settings';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch(SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciales inválidas');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      setIsLoggedIn(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/example-patient-portal" />;
  }

  return (
    <Container sx={CONTAINER_AUTH_STYLES} >
      <Box sx={TYPOGRAPHY_LOGIN_STYLES}>
        <Typography variant="h4" component="h1">
          Iniciar Sesión
        </Typography>
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}
      </Box>
      <Box sx={TEXTFIELD_LOGIN_STYLES}>
        <TextField
          label="Correo"
          type="email"
          value={email}
          size='small'
          InputLabelProps={{ shrink: false }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="************"
          type="password"
          value={password}
          size='small'
          InputLabelProps={{ shrink: false }}

          onChange={(e) => setPassword(e.target.value)}
        />
        <Button sx={BUTTON_LOGIN_STYLES} variant="contained" size='small' onClick={handleLogin}>
          Ingresar
        </Button>
      </Box>
      <Box sx={BOX_LOGIN_STYLES}>
        <Typography> No tienes cuenta? </Typography>
        <Link sx={LINK_LOGIN_STYLES} underline='none' href="/sign-up"> Registrarse </Link>
      </Box>
    </Container >
  );
}

export { Auth }