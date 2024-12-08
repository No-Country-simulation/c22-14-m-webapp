import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Navbar from './../../common/components/navbar';
import Home from './../pages/home';
import RegisterMedicAdminForm from './../../common/components/adn-med-register';
import { AppoimentRequest } from '../../auth/pages/appointmentRequest';
import { Auth } from '../../auth/pages/auth';
import { SignUp } from '../../auth/pages/signUp';
import HistoryMedical from '../pages/history-medical';
import  Footer  from '../../common/components/footer';
import ViewExpedientes from './viewExpedientes';



function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regis-medic-admin" element={<RegisterMedicAdminForm />} />
        <Route path="/appoiment-request" element={<AppoimentRequest />} />
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/history-medical" element={<HistoryMedical />} />
        <Route path="/view-expedientes" element={<ViewExpedientes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
