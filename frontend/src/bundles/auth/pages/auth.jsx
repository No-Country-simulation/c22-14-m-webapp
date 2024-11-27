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
  return (
    <>
        <Button variant="contained">Sign-in or sign-up</Button>
        <Link underline="none" href="/">Back</Link>
    </>
  )
}

export { Auth }