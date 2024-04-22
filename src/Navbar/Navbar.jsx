import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CrownIcon from '@mui/icons-material/EmojiEvents';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Navbar = () => {
  const navigate = useNavigate();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleNavigate = (text) => () => {
    switch (text) {
      case 'Profile':
        navigate('/user-profile');
        break;
      case 'About Us':
        navigate('/about-us');
        break;
      case 'Log out':
        navigate('/job-page');
        break;
      case 'All Courses':
        navigate('/courses');
        break;
      default:
        break;
    }
  };

  const PremiumButton = styled(Button)({
    background: '#4fb075', // Apply Now button color
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 36, // Reduced button height
    padding: '0 20px', // Reduced padding
    '&:hover': {
      background: '#3a8b5f', // Dark green color on hover
    },
  });

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    setOpenLogoutDialog(false);
    navigate('/');
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePrimium = () => {
    navigate('/primium')
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List>
        {['Profile', 'About Us', 'Courses'].map((text, index) => (

          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon >
                {index % 2 === 0 ? <AccountBoxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} onClick={handleNavigate(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Log out'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} onClick={handleNavigate(text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }

  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <h1 className="logo">
            Monkey<span>Jobs</span>
          </h1>
          <div>
            <span style={{ paddingRight: '20px' }}>
              <PremiumButton startIcon={<CrownIcon />} onClick={handlePrimium}>
                Premium
              </PremiumButton>
            </span>
            <span style={{ paddingRight: '20px' }}>
              <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={100} color="secondary">
                  <MailIcon style={{ fontSize: '25px' }} />
                </Badge>
              </IconButton>
            </span>
            <span >
              <MenuIcon style={{ fontSize: '25px' }} onClick={handleClick} />
            </span>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {DrawerList}
            </Popover>
          </div>
        </nav>
      </div>
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
    </>
  );
};

export default Navbar;
