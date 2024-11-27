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
  return (
    <>
        <Button variant="contained">Sign-in or sign-up</Button>
        <Link underline="none" href="/">Back</Link>
    </>
  )
}

export { Auth }