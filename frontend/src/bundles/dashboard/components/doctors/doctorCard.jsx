/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';



const DoctorCard = ({ doctor }) => {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: isSmallScreen ? 'center' : 'flex-start',
        boxShadow: 3,
        minWidth: isSmallScreen ? 250 : 350,
        width: 350,
        maxHeight: "70%",
        margin: 'auto',
        p: 1,
      }}
    >
      <CardMedia
        component="img"
        image={doctor.image}
        alt={doctor.name}
        sx={{
          width: isSmallScreen ? '100%' : 150,
          height: isSmallScreen ? "200" : 'auto',
          minHeight: 100,
          borderRadius: 2,
          objectFit: 'cover',
          display: 'block',
          margin: 'auto',
        }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isSmallScreen ? 'center' : 'flex-start',
          textAlign: isSmallScreen ? 'center' : 'left',
          width: '100%',
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Dr. {doctor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {doctor.specialty}
        </Typography>
        <Box mt={1}>
          <Typography variant="body2" color="text.primary">
            {doctor.license_number}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {doctor.contact}
          </Typography> */}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;