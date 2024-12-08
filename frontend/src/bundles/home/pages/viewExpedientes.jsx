import React from 'react';
import { Card, CardContent, Typography, TextField, Button, CardMedia, Box } from '@mui/material';
import CardsExpedientes from '../../common/components/cardsExpedientes';
import { Car } from 'lucide-react';

const ViewExpedientes = () => {
    return (
        <div className="container">

        <div className="d-flex gap-4 justify-content-center mt-5 mb-5">
            <TextField 
            sx={{width: '60%'}}
            margin='normal'
            label="Ingresa el nombre del paciente"
            type='text'
            variant="outlined"
            >
            </TextField>
            <Button
            variant="contained"
            sx={{height: '58px', marginTop: '15px'}}
            >
                <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
            </div>
            
            <CardsExpedientes />
            <CardsExpedientes />
            <CardsExpedientes />
            <CardsExpedientes />
        </div>
    );
};

export default ViewExpedientes;