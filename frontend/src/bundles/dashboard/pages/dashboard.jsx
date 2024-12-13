import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Box, createTheme } from '@mui/material';
import { NAVIGATION } from '../navigation/navigation';
import { COMPONENT_MAP } from '../navigation/component-map';


const customTheme = createTheme({
    palette: {
      mode: 'light',
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
