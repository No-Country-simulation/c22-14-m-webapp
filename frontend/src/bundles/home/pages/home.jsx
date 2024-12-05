import {
  Typography, Box, Card, CardContent, useTheme,
  useMediaQuery, Button
} from "../../common/components/components"
import { ClipboardList, Brain, UserRound, Heart } from 'lucide-react'
import NavBar from '../../common/components/navbar'


const Home = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const cardData = [
    {
      icon: <ClipboardList size={80} color="#3F51B5" />,
      title: "Nutrición",
      description: "De la mano del Centro de Nutrición Clínica (CNC), ofrecemos servicios de nutrición personalizados para nuestros pacientes. Nuestro enfoque es la alimentación saludable, la pérdida de peso, la nutrición clínica, entre otras etapas importantes de los usuarios como lo es el embarazo, el deporte, los niños y adolescentes."
    },
    {
      icon: <Brain size={80} color="#3F51B5" />,
      title: "Psicología",
      description: "De la mano del Centro de Nutrición Clínica (CNC), ofrecemos servicios de nutrición personalizados para nuestros pacientes. Nuestro enfoque es la alimentación saludable, la pérdida de peso, la nutrición clínica, entre otras etapas importantes de los usuarios como lo es el embarazo, el deporte, los niños y adolescentes."
    },
    {
      icon: <UserRound size={80} color="#3F51B5" />,
      title: "Psiquiatría",
      description: "De la mano del Centro de Nutrición Clínica (CNC), ofrecemos servicios de nutrición personalizados para nuestros pacientes. Nuestro enfoque es la alimentación saludable, la pérdida de peso, la nutrición clínica, entre otras etapas importantes de los usuarios como lo es el embarazo, el deporte, los niños y adolescentes."
    },
    {
      icon: <Heart size={80} color="#3F51B5" />,
      title: "Medicina General",
      description: "De la mano del Centro de Nutrición Clínica (CNC), ofrecemos servicios de nutrición personalizados para nuestros pacientes. Nuestro enfoque es la alimentación saludable, la pérdida de peso, la nutrición clínica, entre otras etapas importantes de los usuarios como lo es el embarazo, el deporte, los niños y adolescentes."
    }
  ];

  const FIRST_SECTION_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    py: { xs: 2, sm: 3, md: 4 }
  };

  const IMAGE_CONTAINER_STYLES = {
    width: '100%',
    height: {
      xs: '40vh',
      sm: '60vh',
      md: '80vh',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',  
    overflow: 'hidden',
    '& > img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'top center',
  }
  };

  const CONTENT_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    px: { xs: 2, sm: 6, md: 8  , lg: 10}, 
    py: { xs: 2, sm: 6, md: 8 , lg: 10 },
 
  };

  const TITLE_COMPANY_STYLES = {
    color: '#000',
    fontWeight: 'bold',
    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
  };

  const DESCRIPTION_COMPANY_STYLES = {
    color: '#333',
    paddingBottom: { xs: 2, sm: 3, md: 4, lg:6 },
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
    lineHeight: 1.6,
    width: '66%',
    textAlign: 'justify',
    paddingTop:{ xs: 2, sm: 3, md: 4, lg:6 },
  };

  const BUTTON_CONTAINER_STYLES = {
    display: 'flex',
    gap: { xs: 1, sm: 2 },
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const buttonStyles = {
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, sm: 1.25, md: 1.5 },
    fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }
  };

  const CONTAINER_STYLES = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: isSmall ? '16px' : (isMedium ? '24px' : (isLarge ? '32px' : '40px')),
    padding: isSmall ? '24px' : (isMedium ? '24px' : (isLarge ? '32px' : '40px')),
    backgroundColor: '#E6E6FA'
  };

  const GRID_CONTAINER_STYLES = {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
    },
    gap: isSmall ? 2 : (isMedium || isLarge ? 10 : 10),
    maxWidth: 'lg',
  };

  const CARD_STYLES = {
    flexBasis: isSmall
      ? '100%'
      : (isMedium
        ? 'calc(50% - 12px)'
        : (isLarge
          ? 'calc(50% - 16px)'
          : 'calc(25% - 30px)')),
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-4px)',
      transition: 'transform 0.3s ease-in-out'
    }
  };

  const CARD_CONTENT_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1
  };

  const TITLE_STYLES = {
    color: '#272FC1',
    paddingTop: isSmall ? 2 : 3,
    paddingBottom: isSmall ? 2 : 3,
    fontWeight: 'bold',
    fontSize: isSmall ? "16px" : isMedium ? "18px" : "20px",
  };

  const DESCRIPTION_STYLES = {
    color: '#333',
    fontSize: isSmall ? "14px" : isMedium ? "16px" : "18px",
    lineHeight: 1.6,
  };

  return (
    <Box>
      <NavBar />
      {/* Sección 1: Image  */}
      <Box sx={FIRST_SECTION_STYLES}>
        <Box>
          <Box sx={IMAGE_CONTAINER_STYLES}>
            <img
              src="/src/image/home.jpg"
              alt="Descripción de la imagen"
            />
          </Box>

          <Box id="about-us" sx={CONTENT_STYLES}>
            <Typography variant="h1" sx={TITLE_COMPANY_STYLES}>
              VitaMind
            </Typography>

            <Typography sx={DESCRIPTION_COMPANY_STYLES}>
              En VitaMind, transformamos la manera de cuidar tu
              salud. Somos líderes en servicios de telemedicina, conectando a
              pacientes con médicos altamente calificados a través de tecnología
              segura y avanzada. Nuestra misión es brindarte atención médica
              rápida, confiable y accesible, estés donde estés. Creemos en la
              comodidad sin comprometer la calidad, ofreciendo soluciones
              personalizadas para tu bienestar. Tu salud, nuestra prioridad.
            </Typography>

            <Box sx={BUTTON_CONTAINER_STYLES}>
              <Button
                variant="contained"
                sx={{
                  ...buttonStyles,
                  bgcolor: '#3f51b5',
                  '&:hover': { bgcolor: '#303f9f' }
                }}
              >
                Conócenos
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ...buttonStyles,
                  borderColor: '#3f51b5',
                  color: '#3f51b5',
                  '&:hover': {
                    borderColor: '#303f9f',
                    bgcolor: 'rgba(63, 81, 181, 0.04)'
                  }
                }}
              >
                ¡Agenda tu Cita!
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Sección 2: Cards */}
      <Box id="services" sx={CONTAINER_STYLES}>
        <Box sx={GRID_CONTAINER_STYLES}>
          {cardData.map((card, index) => (
            <Card key={index} sx={CARD_STYLES}>
              <CardContent sx={CARD_CONTENT_STYLES}>
                {card.icon}
                <Typography variant="h6" component="h2" sx={TITLE_STYLES}>
                  {card.title}
                </Typography>
                <Typography sx={DESCRIPTION_STYLES}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export { Home };
