import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.grey[200],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="text.secondary" display="block">
              Terminos & Condiciones
            </Link>
            <Link href="#" color="text.secondary" display="block">
              Politica de Privacidad
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Siguenos
            </Typography>
            <Box>
              <IconButton aria-label="Instagram" color="inherit" component="a" href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="Facebook" color="inherit" component="a" href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit" component="a" href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contactanos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <EmailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              info@vitamind.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <PhoneIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              +1 (123) 456-7890
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://medicare.com/">
              VitaMind
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

