import React, { useState, useEffect } from 'react';
import {
  Button,
  Link,
  Container,
  TextField,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from '../../common/components/components';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN } from '../../../settings';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const CONTAINER_LOGIN_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: isSmall ? '100%' : isMedium ? '50%' : isLarge ? '40%' : '30%',
    background: '#ffffff',
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    borderRadius: '4%',
    padding: isSmall ? '10%' : isMedium ? '12%' : isLarge ? '0%' : '0%',
  };

  const TYPOGRAPHY_LOGIN_STYLES = {
    paddingTop: isSmall ? '10%' : isMedium ? '12%' : isLarge ? '15%' : '15%',
    color: '#bdbdbd',
    '& .MuiTypography-root': {
      fontSize: isSmall
        ? '30px'
        : isMedium
        ? '32px'
        : isLarge
        ? '36px'
        : '40px',
    },
  };

  const TEXTFIELD_LOGIN_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isSmall ? '5%' : isMedium ? '6%' : isLarge ? '8%' : '10%',
    gap: isSmall ? '20px' : isMedium ? '25px' : isLarge ? '30px' : '40px',
    '& .MuiTextField-root': {
      '& .MuiOutlinedInput-root': {
        boxShadow: '0px 5px 20px #00000074',
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': { borderColor: '#E0E3E7' },
      '&:hover fieldset': { borderColor: '#E0E3E7' },
    },
  };

  const BUTTON_LOGIN_STYLES = {
    width: '100%',
    marginTop: isSmall ? '2%' : isMedium ? '2.5%' : isLarge ? '3%' : '3%',
    background: '#00A6A0',
  };

  const BOX_LOGIN_STYLES = {
    display: 'flex',
    flexDirection: isSmall ? 'column' : isMedium || isLarge ? 'row' : 'row',
    justifyContent: isSmall
      ? 'center'
      : isMedium || isLarge
      ? 'space-between'
      : 'space-between',
    alignItems: isSmall
      ? 'center'
      : isMedium || isLarge
      ? 'baseline'
      : 'baseline',
    paddingTop: isSmall ? '10%' : isMedium ? '12%' : isLarge ? '15%' : '15%',
    paddingBottom: isSmall ? '10%' : isMedium ? '12%' : isLarge ? '15%' : '15%',
    color: '#bdbdbd',
    fontSize: '16px',
  };

  const LINK_LOGIN_STYLES = {
    color: '#bdbdbd',
    paddingLeft: isSmall ? '0' : isMedium || isLarge ? '3px' : '3px',
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
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
      const token = data.token;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (isLoggedIn) {
    navigate('/', { replace: true });
    return null;
  }

  return (
    <Container sx={CONTAINER_LOGIN_STYLES}>
      <Box sx={TYPOGRAPHY_LOGIN_STYLES}>
        <Typography variant="h4" component="h1">
          Iniciar Sesión
        </Typography>
      </Box>
      <Box sx={TEXTFIELD_LOGIN_STYLES}>
        <TextField
          placeholder="Correo"
          type="email"
          value={email}
          size="small"
          InputLabelProps={{ shrink: false }}
          onChange={(e) => setEmail(e.target.value)}
          helperText={errorMessage}
        />
        <TextField
          placeholder="************"
          type="password"
          value={password}
          size="small"
          InputLabelProps={{ shrink: false }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={BUTTON_LOGIN_STYLES}
          variant="contained"
          size="small"
          onClick={handleLogin}
        >
          Ingresar
        </Button>
      </Box>
      <Box sx={BOX_LOGIN_STYLES}>
        <Typography> No tienes cuenta? </Typography>
        <Link sx={LINK_LOGIN_STYLES} underline="none" href="/sign-up">
          {' '}
          Registrarse{' '}
        </Link>
      </Box>
    </Container>
  );
};

export { Auth };
