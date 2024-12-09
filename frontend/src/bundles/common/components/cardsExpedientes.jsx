import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const CardsExpedientes = ({ expediente }) => {
    return(
        <Card sx={{ maxWidth: 800, m: 2, mx: 'auto' }}>
                <div className="row">
                    <div className="col-4 ms-5">

                        <CardMedia
                            component="img"
                            sx={{ width: 200 }}

                            image={"https://i.pravatar.cc/250"}
                            className='rounded-circle my-2'
                            alt={"Photo of guillermo"}
                        />

                    </div>
                    <div className="col">

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Guillermo Obando
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Age: 24
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sex: Male
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                            </Box>
                            
                        </CardContent>
                                <Button
                                    variant="contained"
                                    size="small"
                                    sx={{
                                        bgcolor: 'black',
                                        color: 'white',
                                        '&:hover': {
                                            bgcolor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                        width: '80%',
                                    }}
                                >
                                    Ver Expediente
                                </Button>
                    </div>
                    </div>
                    
            </Card>
    )
}

export default CardsExpedientes;