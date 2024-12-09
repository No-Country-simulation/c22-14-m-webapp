import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './router/routes';

import { RouterProvider } from './bundles/common/components/components';
import { store } from './framework/store/store';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider routes={routes} />
        </Provider>
    </StrictMode>,
)
