import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

const NAVIGATION= [
    {
      kind: 'header',
      title: 'Principal',
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
      title: 'Analíticas',
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
      segment: 'configuration',
      title: 'Configuración',
      icon: <LayersIcon />,
    },
  ];

export { NAVIGATION } 