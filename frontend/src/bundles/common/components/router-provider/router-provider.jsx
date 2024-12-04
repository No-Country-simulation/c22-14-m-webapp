import {
    createBrowserRouter,
    RouterProvider as LibraryRouterProvider,
} from 'react-router-dom';

const RouterProvider = ({ routes }) => (
    <LibraryRouterProvider 
        router={createBrowserRouter(routes, {
            future: {
                v7_startTransition: true,
                v7_relativeSplatPath: true,
                v7_fetcherPersist: true,
                v7_normalizeFormMethod: true,
                v7_partialHydration: true,
                v7_skipActionErrorRevalidation: true,
            },
        })}
    />
);

export { RouterProvider };
