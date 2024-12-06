import { Box } from "@mui/material";
import DoctorCard from "./doctorCard";

const Doctors = () => {

  //TODO: traer doctors del estado global
  const doctors = [
    {
      name: 'Jane Doe',
      specialty: 'Cardiologo',
      license_number: '111111111',
      // contact: '(555) 123-4567',
      image: 'https://i.ibb.co/dfKnxw4/16167544465782.webp',
    },
    {
      name: 'Jane Doe',
      specialty: 'Neurólogo',
      license_number: '222222222',
      // contact: '(555) 123-4567',
      image: 'https://i.ibb.co/dfKnxw4/16167544465782.webp',
    },
    {
      name: 'Jane Doe',
      specialty: 'Gastoenterólogo',
      license_number: '3333333333',
      // contact: '(555) 123-4567',
      image: 'https://i.ibb.co/dfKnxw4/16167544465782.webp',
    },
  ];


    return (
      <Box mt={2} sx={{
        display: 'flex',
        gap:2,
        p:2,
        width: "100%",
        flexWrap: "wrap",
        overflow: "auto",
      }}>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </Box>
    );
  };
  
  export { Doctors };