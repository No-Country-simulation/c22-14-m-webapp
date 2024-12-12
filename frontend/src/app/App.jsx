
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { RouterOutlet } from '../bundles/common/components/components';
import { NavBar } from '../bundles/common/components/nav-bar/navBar.jsx';
import { ThemeProvider } from '@mui/material';
import { theme } from '../framework/theme/theme.js';
import { useSelector } from '../bundles/common/hooks/hooks.js';

const App = () => {
    const user = useSelector((state) => state.user.user)
    const role = user?.role
    console.log("role", role)
    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <NavBar role={role}/>
                <RouterOutlet />
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export { App };