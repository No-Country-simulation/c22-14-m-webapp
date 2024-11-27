import React, { useState, useEffect } from 'react';
import { Button, Link, Container, TextField, Typography, Box } from '../../common/components/components';
import { Navigate } from 'react-router-dom';
import { SIGN_IN } from '../../../settings';

const Auth = () => {
  return (
    <>
        <Button variant="contained">Sign-in or sign-up</Button>
        <Link underline="none" href="/">Back</Link>
    </>
  )
}

export { Auth }