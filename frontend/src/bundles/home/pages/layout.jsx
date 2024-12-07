import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './../../common/components/navbar';
import Home from './../pages/home';
import RegisterMedicAdminForm from './../../common/components/adn-med-register';
import { AppoimentRequest } from '../../auth/pages/appointmentRequest';
import { Auth } from '../../auth/pages/auth';
import { SignUp } from '../../auth/pages/signUp';
import HistoryMedical from '../pages/history-medical';


function Layout() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regis-medic-admin" element={<RegisterMedicAdminForm />} />
        <Route path="/appoiment-request" element={<AppoimentRequest />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/history-medical" element={<HistoryMedical />} />
      </Routes>
    </Router>
  );
}

export default Layout;
