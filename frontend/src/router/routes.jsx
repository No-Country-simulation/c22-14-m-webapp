import { App } from '../app/App';
import { Auth } from '../bundles/auth/pages/auth';
import { ProtectedRoute } from '../bundles/common/components/components';
import { AppRoute } from '../bundles/common/constants/constants';
import HistoryMedical from '../bundles/home/pages/history-medical';
import { Home } from '../bundles/home/pages/home';

const routes = [
    {
        path: AppRoute.ROOT,
        element: <App />,
        children: [
            {
                path: AppRoute.SIGN_IN,
                element: <Auth />,
            },
            {
                path: AppRoute.ROOT,
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            {
                path: AppRoute.HISTORY_MEDICAL,
                element: <HistoryMedical />,
            },
            // {
            //     path: AppRoute.ANY,
            //     element: <NotFound />,
            // },
        ],
    },
];

export { routes };
