import { NavBarBase } from "./navBarBase";

const NavBar = ({ role }) => {
  switch (role) {
    case "admin":
      return <NavBarAdmin />;
    case "doctor":
      return <NavBarDoctor />;
    case "patient":
      return <NavBarPatient />;
    default:
      return <NavBarPublic />;
  }
};

const NavBarPublic = () => (
  <NavBarBase
    links={[
      { label: "Nosotros", to: "#about-us" },
      { label: "Servicios", to: "services" },
      { label: "¡Agenda tu Cita!", to: "/appoiment-request" },
      { label: "Registrarme", to: "/sign-up" },
    ]}
  />
);

const NavBarPatient = () => (
  <NavBarBase
    links={[
      { label: "Nosotros", to: "/#about-us" },
      { label: "Servicios", to: "/#services" },
    ]}
    profileOptions={[
      { label: "Cerrar Sesión", to: "/logout" },
    ]}
  />
);

const NavBarDoctor = () => (
  <NavBarBase
    links={[
      { label: "Nosotros", to: "/#about-us" },
      { label: "Servicios", to: "/#services" },
      { label: "Panel de Médico", to: "/doctor-panel" },
    ]}
    profileOptions={[
      { label: "Cerrar Sesión", to: "/logout" },
    ]}
  />
);

const NavBarAdmin = () => (
  <NavBarBase
    links={[
      { label: "Nosotros", to: "/#about-us" },
      { label: "Servicios", to: "/#services" },
      { label: "Panel de Administrador", to: "/admin-panel" },
    ]}
    profileOptions={[
      { label: "Cerrar Sesión", to: "/logout" },
    ]}
  />
);

export { NavBar };
