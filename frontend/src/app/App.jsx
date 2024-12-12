
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { RouterOutlet } from '../bundles/common/components/components';
import { NavBar } from '../bundles/common/components/nav-bar/navBar';
import { ThemeProvider } from '@mui/material';
import { theme } from '../framework/theme/theme.js';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <NavBar/>
                <RouterOutlet />
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export { App };