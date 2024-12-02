import React, { useState, useEffect } from "react";
import {
   TextField, Button, Typography, Box, Container, useTheme,
   useMediaQuery
} from '../../common/components/components';
import { useNavigate } from 'react-router-dom';
import { SIGN_UP } from '../../../settings';


const SignUp = () => {
   const navigate = useNavigate();
   const theme = useTheme();
   const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
   const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
   const isLarge = useMediaQuery(theme.breakpoints.down('sm'));
   const [errorMessage, setErrorMessage] = useState("");
   const [formData, setFormData] = useState({
       firstName: "",
       lastName: "",
       birthDate: "",
       dni: "",
       phoneNumber: "",
       email: "",
       password: "",
   });


   const CONTAINER_REGISTER_STYLES = {
       "&": { padding: '0 3%' },
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       width: isSmall ? '100%' : isMedium ? '70%' : '35%',
       background: '#ffffff',
       boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)',
       borderRadius: '4%'
   }
   const BOX_REGISTER_STYLES = {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       width: '80%',
       paddingBottom: isSmall ? '10%' : '18%',
       paddingBottom: isSmall ? '5%' : '10%',
   }
   const TYPOGRAPHY_REGISTER_STYLES = {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       paddingTop: isSmall ? '10%' : '20%',
       paddingTop: '20%',
       paddingBottom: '10%',
       color: '#bdbdbd',
       '& .MuiTypography-root': {
           fontSize: isSmall ? '24px' : isMedium ? '30px' : isLarge ? '36px' : '36px',
       },
   }
   const TEXTFIELD_REGISTER_STYLES = {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: isSmall ? '20px' : isMedium ? '30px' : '35px',
       width: '100%',
       paddingBottom: isSmall ? '10%' : '23%',
       '& .MuiTextField-root': { width: '100%', '& .MuiOutlinedInput-root': { boxShadow: '0px 5px 20px #00000074' } },
       "& .MuiOutlinedInput-root": {
           "& fieldset": { borderColor: "#E0E3E7" },
           "&:hover fieldset": { borderColor: "#E0E3E7" }
       }
   }
   const BUTTON_REGISTER_STYLES = {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       width: isSmall ? '70%' : isMedium ? '60%' : isLarge ? '50%' : '50%',
       marginTop: isSmall ? '5%' : undefined,
       background: '#00A6A0'
   }


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
       <Container sx={CONTAINER_REGISTER_STYLES}>
           <Box sx={BOX_REGISTER_STYLES}
               component="form"
               onSubmit={handleSubmit}>
               <Box sx={TEXTFIELD_REGISTER_STYLES}>
                   <Box sx={TYPOGRAPHY_REGISTER_STYLES}>
                       <Typography variant="h4" component="h1">
                           Regístrate en VitaMind
                       </Typography>
                   </Box>


                   <TextField
                       label="Nombre"
                       type='text'
                       name="firstName"
                       size="small"
                       value={formData.firstName}
                       onChange={handleChange}
                       helperText={errorMessage}
                       required
                   />
                   <TextField
                       label="Apellido"
                       type='text'
                       name="lastName"
                       size="small"
                       value={formData.lastName}
                       onChange={handleChange}
                       required
                   />
                   <TextField
                       label="Fecha de nacimiento"
                       type="text"
                       name="birthDate"
                       size="small"
                       value={formData.birthDate}
                       onChange={handleChange}
                       required
                   />
                   <TextField
                       label="DNI"
                       type="text"
                       name="dni"
                       size="small"
                       value={formData.dni}
                       onChange={handleChange}
                       required
                   />
                   <TextField
                       label="Número de teléfono"
                       type="tel"
                       name="phoneNumber"
                       size="small"
                       value={formData.phoneNumber}
                       onChange={handleChange}
                       required
                   />
                   <TextField
                       label="Correo electrónico"
                       type="email"
                       name="email"
                       size="small"
                       value={formData.email}
                       onChange={handleChange}
                       required
                   />
                   <TextField
                       label="************"
                       type="password"
                       name="password"
                       size="small"
                       value={formData.password}
                       onChange={handleChange}
                       required
                   />
               </Box>
               <Button sx={BUTTON_REGISTER_STYLES} type="submit" variant="contained" size="large"> Regístrate </Button>
           </Box>
       </Container>
   )
}


export { SignUp }