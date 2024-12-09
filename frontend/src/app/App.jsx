
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { RouterOutlet } from '../bundles/common/components/components';
import { NavBar } from '../bundles/common/components/nav-bar/navBar';

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <NavBar/>
            <RouterOutlet />
        </LocalizationProvider>
    );
};

export { App };