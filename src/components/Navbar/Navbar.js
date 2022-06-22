import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import { IconButton } from '@mui/material';
import "./Navbar.css";

const Navbar = () => {

    const location = useLocation();
    const path = location.hash;

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className="navContainer">
            <NavHashLink smooth to="/#home" style={{textDecoration: "none", color: "black"}}><p className="name"></p></NavHashLink>
            <div className="navOptionContainer">
                <NavHashLink smooth to="/#home" className={`navOption ${path==="#home" && "select"}`}>Home</NavHashLink>
                <NavHashLink smooth to="/#information" className={`navOption ${path==="#information" && "select"}`}>Information</NavHashLink>
                <NavHashLink smooth to="/#reminder" className={`navOption ${path==="#reminder" && "select"}`}>Reminder</NavHashLink>
            </div>
            <div className="space"></div>
            <IconButton
                id="nav-burger"
                aria-controls="nav-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon className="burger" />
            </IconButton>
            <Menu
                id="nav-menu"
                aria-labelledby="nav-burger"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/#home" className="menuitem">Home</NavHashLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/#information" className="menuitem">Information</NavHashLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <NavHashLink smooth to="/#reminder" className="menuitem">Reminder</NavHashLink>
                </MenuItem>  
            </Menu>
        </div>
    )
}

export default Navbar