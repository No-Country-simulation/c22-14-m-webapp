import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'


//import style sheet
import './index.css';

import Layout from './bundles/home/pages/layout';

// ReactDOM.render(<Layout />, document.getElementById('root'));


createRoot(document.getElementById('root')).render(<Layout />);


// import { StrictMode } from 'react'
// import './index.css'
// import { routes } from './router/routes';

// import { RouterProvider } from './bundles/common/components/components';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider routes={routes} />
//   </StrictMode>,
// )
