import React from 'react';
import { Link } from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom'
import "./../../../styles/navbar.css"






export default function NavBar() {

  // if (role === 'admin') {
  //   return <NavBarAdmin />;
  // } else if (role === 'doctor') {
  //   return <NavBarDoctor />;
  // } else if (role === 'patient') {
  //   return <NavBarPatient />;
  // }else {
  //   return <NavBarPublic />
  // }

  return <NavBarPublic />
}

const NavBarPublic = () => (
  
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-gen">
        <div className="container-fluid" style={{ cursor: 'pointer'}}>
          <LinkRouter className="navbar-brand ms-4"  to="/">VitaMind</LinkRouter>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto gap-3 " >
              <Link className="nav-Link active " aria-current="page" to="about-us" smooth="true" duration={500}>Nosotros</Link>
              <Link className="nav-Link " to="services" smooth="true" duration={500} >Servicios</Link>
              <LinkRouter className="nav-Link " to="/appoiment-request">¡Agenda tu Cita!</LinkRouter>
              <LinkRouter className="nav-Link " to="/sign-up" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Registrarme
              </LinkRouter>
            </div>
          </div>
        </div>
      </nav>
    </>

);

const NavBarPatient = () => (
  
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-gen">
      <div className="container-fluid">
        <Link className="navbar-brand ms-4" to="#">VitaMind</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-Link active" aria-current="page" to="#">Nosotros</Link>
            <Link className="nav-Link" to="#">Servicios</Link>
            <LinkRouter className="nav-Link" to="#">¡Agenda tu Cita!</LinkRouter>
          <li className="nav-item dropdown">
            <LinkRouter className="nav-Link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Perfil
            </LinkRouter>
            <ul className="dropdown-menu text-start dropdown-menu-end">
              <li><LinkRouter className="dropdown-item" to="/">Cerrar Sesion</LinkRouter></li>
              
            </ul>
          </li>
          </div>
        </div>
      </div>
    </nav>
  </>

);

const NavBarMedic = () => (
  
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-gen">
      <div className="container-fluid">
        <Link className="navbar-brand ms-4" to="#">VitaMind</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-Link active" aria-current="page" to="#">Nosotros</Link>
            <Link className="nav-Link" to="#">Servicios</Link>
            <Link className="nav-Link" to="#">Panel de Medico</Link>
          <li className="nav-item dropdown">
            <LinkRouter className="nav-Link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Perfil
            </LinkRouter>
            <ul className="dropdown-menu text-start dropdown-menu-end">
              <li><LinkRouter className="dropdown-item" to="/">Cerrar Sesion</LinkRouter></li>
              
            </ul>
          </li>
          </div>
        </div>
      </div>
    </nav>
  </>

);


const NavBarAdmin = () => (
  
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-gen">
      <div className="container-fluid">
        <Link className="navbar-brand ms-4" to="#">VitaMind</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-Link active" aria-current="page" to="#">Nosotros</Link>
            <Link className="nav-Link" to="#">Servicios</Link>
            <Link className="nav-Link" to="#">Panel de Administrador</Link>
          <li className="nav-item dropdown">
            <LinkRouter className="nav-Link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Perfil
            </LinkRouter>
            <ul className="dropdown-menu text-start dropdown-menu-end">
              <li><LinkRouter className="dropdown-item" to="/">Cerrar Sesion</LinkRouter></li>
              
            </ul>
          </li>
          </div>
        </div>
      </div>
    </nav>
  </>

);