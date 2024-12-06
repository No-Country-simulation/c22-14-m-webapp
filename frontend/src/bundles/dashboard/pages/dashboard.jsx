
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Box, Button, createTheme, Stack, Typography } from '@mui/material';
import Citas from '../components/appointment';
import { Doctors } from '../components/doctors/doctors';
import Appointment from '../components/appointment';
import { Patients } from '../components/patients';
import { Records } from '../components/records';

const NAVIGATION= [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'appointment',
    title: 'Citas',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'doctors',
    title: 'Médicos',
    icon: <BarChartIcon />,
    // children: [
    //   {
    //     segment: 'sales',
    //     title: 'Sales',
    //     icon: <DescriptionIcon />,
    //   },
    //   {
    //     segment: 'traffic',
    //     title: 'Traffic',
    //     icon: <DescriptionIcon />,
    //   },
    // ],
  },
  {
    segment: 'patients',
    title: 'Pacientes',
    icon: <LayersIcon />,
  },
  {
    segment: 'records',
    title: 'Registros',
    icon: <LayersIcon />,
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

const customTheme = createTheme({
    palette: {
      mode: 'light', // Fija el modo en "light" sin permitir alternar
      background: {
        default: '#F9F9FE',
        paper: '#EEEEF9',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });

const COMPONENT_MAP = {
        // '/dashboard': <Dashboard />,
        '/appointment': <Appointment />,
        '/doctors': <Doctors />,
        '/patients': <Patients />,
        '/records': <Records />,
};

const DemoPageContent = ({ pathname }) => {
    const ContentComponent = COMPONENT_MAP[pathname] || <p>404: Page not found</p>;

    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }}
        >
        {ContentComponent}
        </Box>
    );
};



const Dashboard = () => {

  const router = useDemoRouter('/dashboard');
  console.log(router)

  // Remove this const when copying and pasting into your project.

  return (
    // preview-start
    <AppProvider
    navigation={NAVIGATION}
    branding={{
      logo: <img src="https://w7.pngwing.com/pngs/178/6/png-transparent-playstation-2-playstation-vr-playstation-vita-playstation-3-playstation-4-logo-blue-text-logo.png" alt="VitaMind logo" />,
      title: 'VitaMind',
    }}
    router={router}
    theme={customTheme}
    >
      <DashboardLayout>
      <DemoPageContent pathname={router.pathname}/>
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export { Dashboard } 
