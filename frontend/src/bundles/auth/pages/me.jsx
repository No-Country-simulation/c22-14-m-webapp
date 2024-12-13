import { useSelector } from '../../common/hooks/hooks.js';
// import Doctor from '../pages/Doctor';
import { Dashboard } from '../../dashboard/pages/dashboard.jsx';
import Patient from '../../patient/pages/patient.jsx';

const UserRoleComponent = () => {
    const role = useSelector((state) => state.user.user?.role);
    console.log("este es mi rol", role)

    if (role === 'doctor' || role === 'patient') {
        return <Patient />;
    } else if (role === 'admin') {
        return <Dashboard />;
    } else {
        // Opción predeterminada o redirección
        return <div>Acceso no autorizado</div>;
    }
};

export { UserRoleComponent };
