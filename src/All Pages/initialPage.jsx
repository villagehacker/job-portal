import React from 'react';
import BackgroundGlobe from '../BackgroundGlobe';
import {useNavigate} from 'react-router-dom';

const InitialPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/job-page');
    }
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BackgroundGlobe />
            <div style={{ position: 'absolute', zIndex: 1, textAlign: 'center', color: 'white' }}>
                <h1 style={{ marginBottom: '5px', fontSize: '48px' }}>Tired of searching jobs...?</h1>
                
                <p style={{ marginBottom: '5px',  fontSize: '25px' }}>Explore the various job opportunities with us!</p>
                
                <button
                    style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: '2px solid white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        animation: 'pulse 1s infinite',
                    }}
                    onClick={handleLogin}
                >
                    Explore
                </button>
            </div>
        </div>
    );
};

export default InitialPage;
