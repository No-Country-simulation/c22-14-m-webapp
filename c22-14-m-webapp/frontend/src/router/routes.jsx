import { App } from '../app/App';
import { Auth } from '../bundles/auth/pages/auth';
import { SignUp } from '../bundles/auth/pages/signUp';
import RegisterMedicAdminForm from '../bundles/common/components/adn-med-register';
import NavBar from '../bundles/common/components/navbar';
import { ProtectedRoute } from '../bundles/common/components/components';
import { AppRoute } from '../bundles/common/constants/constants';
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
                path: AppRoute.SIGN_UP,
                element: <SignUp />,
            },
            {
                path: AppRoute.REGIS_MEDIC_ADMIN,
                element: <RegisterMedicAdminForm />,
            },
            {
                path: AppRoute.NAVBAR,
                element: <NavBar />,
            },
            {
                path: AppRoute.ROOT,
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
            },
            // {
            //     path: AppRoute.ANY,
            //     element: <NotFound />,
            // },
        ],
    },
];

export { routes };
