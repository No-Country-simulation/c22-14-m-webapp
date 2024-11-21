import {
    createBrowserRouter,
    RouterProvider as LibraryRouterProvider,
} from 'react-router-dom';

const RouterProvider = ({ routes }) => (
    <LibraryRouterProvider router={createBrowserRouter(routes)} />
);

export { RouterProvider };
