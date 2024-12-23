import { App } from '../app/App';
import { Auth } from '../bundles/auth/pages/auth';
import { SignUp } from '../bundles/auth/pages/signUp';
import { ProtectedRoute } from '../bundles/common/components/components';
import { AppRoute } from '../bundles/common/constants/constants';
import HistoryMedical from '../bundles/home/pages/history-medical';
import { Home } from '../bundles/home/pages/home';
import { AppoimentRequest } from '../bundles/auth/pages/appointmentRequest';
import { AppoimentManagement } from '../bundles/auth/pages/appoimentManagement';
import { DoctorSelection } from '../bundles/auth/pages/doctorSelection';
import NavBar from '../bundles/common/components/navbar';

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
                path: AppRoute.FEAT_APPOIMENT,  
                element: <AppoimentRequest />,
            },
            {
                path: AppRoute.APPOIMENT_MANAGEMENT,
                element: <AppoimentManagement />,
            },
            {
                path: `${AppRoute.DOCTOR_SELECTION}/:appointmentId`,
                element: <DoctorSelection />,
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
