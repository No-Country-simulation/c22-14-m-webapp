import React from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBarBase = ({ links, profileOptions }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
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
              <Button
                key={link.label}
                component={RouterLink}
                to={link.to}
                color="inherit"
              >
                {link.label}
              </Button>
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