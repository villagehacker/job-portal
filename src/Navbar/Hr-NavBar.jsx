import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/NavBar.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const HrNavbar = () => {
    const navigate = useNavigate();
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

    const handleConfirmLogout = () => {
        setOpenLogoutDialog(false);
        navigate('/hr-login');
    };

    const handleLogout = () => {
        setOpenLogoutDialog(true);
    };

    const handleCloseLogoutDialog = () => {
        setOpenLogoutDialog(false);
    };

    return (
        <>
            <div className="main-page">
                <nav id="navbar">
                    <h1 className="logo">
                        Job<span>Hunt</span>
                    </h1>
                    <ul>
                        <li>
                            <Link to="/our-jobs">Our Job</Link>
                        </li>
                        <li>
                            <Link to="/applicants">Applicants</Link>
                        </li>
                        <li>
                            <Link to="/hr-profile">Profile</Link>
                        </li>
                        <li onClick={handleLogout}>
                            <span>Log out</span>
                        </li>
                    </ul>

                </nav>
                <Dialog
                    open={openLogoutDialog}
                    onClose={handleCloseLogoutDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Confirm Logout"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to log out?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button onClick={handleCloseLogoutDialog}>Cancel</button>
                        <button onClick={handleConfirmLogout}>Confirm</button>
                    </DialogActions>
                </Dialog>
            </div>

        </>
    );
};

export default HrNavbar;
