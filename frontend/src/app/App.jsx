
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { RouterOutlet } from '../bundles/common/components/components';

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <RouterOutlet />
        </LocalizationProvider>
    );
};

export { App };