import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const NavBarBase = ({ links, profileOptions }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
    setAnchorEl(null);
    };

    const renderLink = (link) => {
        if (link.to.startsWith("#")) {
        return (
            <ScrollLink
                key={link.label}
                to={link.to.substring(1)}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
            >
            <Button variant="text">{link.label}</Button>
            </ScrollLink>
        );
        } else {
        // Enlace externo (react-router-dom)
        return (
            <Button
                variant="text"
                key={link.label}
                component={RouterLink}
                to={link.to}
                color="inherit"
            >
            {link.label}
            </Button>
        );
        }
    };
    

    return (
    <AppBar sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100, // Asegura que el navbar esté por encima de otros elementos
    }}>
        <Toolbar>
            <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
            >
                VitaMind
            </Typography>
            <Box>
                {links && links.map((link) => renderLink(link))}
                
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
            </Box>
        </Toolbar>
    </AppBar>
    );
};

export { NavBarBase } 