import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './router/routes';

import { RouterProvider } from './bundles/common/components/components';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider routes={routes} />
  </StrictMode>,
)
