// HRDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HRDashboard = () => {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/hr-profile-page');
        // You can navigate to HR profile page here
    };

    const handleHireEmployeesClick = () => {
        navigate('/hire');
        // You can navigate to hire employees page here
    };

    const handlePostNewJobClick = () => {
        navigate('/post-new-job');
        // You can navigate to post new job page here
    };

    const handleLogoutClick = () => {
        navigate('/logout');
        // You can perform logout action here
    };

    return (
        <div style={{ backgroundColor: '#1f1f1f', color: '#fff', minHeight: '100vh', padding: '20px' }}>
            <h1>HR Dashboard</h1>
            <div style={{ position: 'fixed', top: '20px', right: '20px' }}>
                <button style={buttonStyle} onClick={handleProfileClick}>HR Profile</button>
                <button style={buttonStyle} onClick={handleHireEmployeesClick}>Hire Employees</button>
                <button style={buttonStyle} onClick={handleLogoutClick}>Logout</button>
            </div>
            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <h2>Welcome to HR Dashboard!</h2>
                <p>Manage your HR tasks here.</p>
                <button style={postJobButtonStyle} onClick={handlePostNewJobClick}>Post New Job</button>
            </div>
        </div>
    );
};

const buttonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
};

const postJobButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
};

export default HRDashboard;
