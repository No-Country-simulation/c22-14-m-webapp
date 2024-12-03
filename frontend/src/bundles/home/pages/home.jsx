import {
  Typography, Box, Card, CardContent, useTheme,
  useMediaQuery,
} from "../../common/components/components"

const Home = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLarge = useMediaQuery(theme.breakpoints.between('md', 'lg'));

  const cardData = [
    {
      title: "Nutrición",
      description: `
        De la mano del Centro de Nutrición Clínica (CNC), 
        ofrecemos servicios de nutrición personalizados para nuestros pacientes. 
        Nuestro enfoque es la alimentación saludable, la pérdida de peso, 
        la nutrición clínica, entre otras etapas importantes de los usuarios como lo 
        es el embarazo, el deporte, los niños y adolescentes.
      `,
    },
    {
      title: "Psicología",
      description: `
        Contamos con un equipo especializado en psicología para brindar 
        apoyo emocional y terapias que promuevan el bienestar mental. 
        Nuestro enfoque abarca desde el manejo del estrés hasta el desarrollo 
        personal y la superación de traumas.
      `,
    },
    {
      title: "Psiquiatría",
      description: `
        Ofrecemos servicios de psiquiatría con especialistas que se dedican 
        al diagnóstico y tratamiento de trastornos mentales, asegurando una 
        atención integral y personalizada para cada paciente.
      `,
    },
    {
      title: "Medicina General",
      description: `
        Nuestro equipo de medicina general está preparado para atender tus 
        necesidades básicas de salud, realizar chequeos preventivos y tratar 
        afecciones comunes con un enfoque en el cuidado integral del paciente.
      `,
    },
  ];

  const IMAGE_BOX_STYLES = {
    width: '100%',
    mb: 2,
    height: isSmall ? 200 : 300,
    bgcolor: 'grey.300',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  const DESCRIPTION_BOX_STYLES = { padding: '5%' }
  const TYPOGRAPHY_STYLES = { fontSize: '21px', textAlign: 'center' }
  const DESCRIPTION_TYPOGRAPHY_STYLES = { fontSize: '21px' }
  const CARDS_BOX_STYLES = { display: 'flex', flexWrap: 'wrap', gap: "16px", padding: '16px', alignItems: "center", justifyContent: 'center' }
  const CARD_BOX_STYLES = { flex: `0 1 calc(${isSmall ? "100%" : "calc(50% - 8px)"})` }
  const TYPOGRAPHY_CARD_STYLES = {}
  const DESCRIPTION_CARD_STYLES = {}
  return (
    <Box>
      {/* Sección 1: Image  */}
      <Box>
        <Box sx={IMAGE_BOX_STYLES}>
          <Typography variant="body1">Área para la imagen</Typography>
        </Box>
        <Box sx={DESCRIPTION_BOX_STYLES}>
          <Typography variant="h6" component="h1" align="justify" gutterBottom sx={TYPOGRAPHY_STYLES}>
            VitaMind
          </Typography>
          <Typography variant="body1" align="justify" sx={DESCRIPTION_TYPOGRAPHY_STYLES}>
            En VitaMind, transformamos la manera de cuidar tu salud. Somos líderes en servicios de telemedicina, conectando a pacientes con médicos altamente calificados a través de tecnología segura y avanzada. Nuestra misión es brindarte atención médica rápida, confiable y accesible, estés donde estés. Creemos en la comodidad sin comprometer la calidad, ofreciendo soluciones personalizadas para tu bienestar. Tu salud, nuestra prioridad.
          </Typography>
        </Box>
      </Box>

      {/* Sección 2: Cards */}
      <Box sx={CARDS_BOX_STYLES}>
        {cardData.map((card, index) => (
          <Card key={index} sx={CARD_BOX_STYLES}>
            <CardContent>
              <Typography variant="h5" align="center" component="div" sx={TYPOGRAPHY_CARD_STYLES}>
                {card.title}
              </Typography>
              <Typography variant="body2" align="center" sx={DESCRIPTION_CARD_STYLES}>{card.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export { Home }
