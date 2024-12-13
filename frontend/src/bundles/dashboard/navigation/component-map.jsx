import { Doctors } from '../components/doctors/doctors';
import Appointment from '../components/appointment';
import { Patients } from '../components/patients';
import { Records } from '../components/records';

const COMPONENT_MAP = {
    // '/dashboard': <Dashboard />,
    '/appointment': <Appointment />,
    '/doctors': <Doctors />,
    '/patients': <Patients />,
    '/records': <Records />,
    '/configuration': <Records />,
};

export { COMPONENT_MAP }