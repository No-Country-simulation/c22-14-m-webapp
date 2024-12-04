import { Button, Typography, Container, Link } from "../../common/components/components"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppRoute } from '../../common/constants/constants'
import NavBar from '../../common/components/navbar'


const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    } else {
      navigate('/sign-in', { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/sign-in', { replace: true });
  };

  if (!isLoggedIn) {
    navigate('/sign-in', { replace: true });
    return null;
  }

  return (
    <>
    
    <NavBar />
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Link underline="none" href={AppRoute.SIGN_UP}>Registrarse</Link>
      <Link underline="none" href={AppRoute.SIGN_IN}>Iniciar Sesión</Link>
      <Typography variant="body1">
        Bienvenido al portal del paciente. Aquí puedes acceder a tu información.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout} style={{ marginTop: '20px' }}>
        Cerrar Sesión
      </Button>
    </Container>
    </>
    
  );
};

export {Home};
