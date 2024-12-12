import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Link } from 'react-scroll';

const NavBarBase = ({ links, profileOptions }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
    setAnchorEl(null);
    };

    return (
    <AppBar position="static" className={styles.navBar}>
        <Toolbar>
            <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                className={styles.logo}
                sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
            >
                VitaMind
            </Typography>
            <div>
                {links.map((link) => (
                    <Link
                        key={link.label}
                        to={link.to} // ID de la sección a la que quieres desplazarte
                        smooth={true} // Activar desplazamiento suave
                        duration={500} // Duración del desplazamiento en milisegundos
                        spy={true} // Activa el seguimiento para aplicar estilos activos
                        offset={-70} // Ajuste de desplazamiento (por ejemplo, para una barra de navegación fija)
                    >
                        <Button va>
                            {link.label}
                        </Button>
                    </Link>
                ))}
                
                {profileOptions && (
                <>
                    <IconButton color="inherit" onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    >
                    {profileOptions.map((option) => (
                        <MenuItem
                        key={option.label}
                        onClick={handleMenuClose}
                        component={RouterLink}
                        to={option.to}
                        >
                        {option.label}
                        </MenuItem>
                    ))}
                    </Menu>
                </>
                )}
            </div>
        </Toolbar>
    </AppBar>
    );
};

export { NavBarBase } 