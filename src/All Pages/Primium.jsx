import React from 'react';
import { Link } from 'react-router-dom';

const Primium = () => {
    // Handle subscription logic here

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Premium Subscription</h1>
            <p style={textStyle}>Unlock exclusive features with our premium subscription!</p>
            <p style={textStyle}>Subscription Details:</p>
            <ul style={listStyle}>
                <li style={listItemStyle}>Resume Builder</li>
                {/* Add more subscription details here */}
            </ul>
            <a href='https://rzp.io/i/8iAoAOo5O' target='parent'>
                <button style={subscribeButtonStyle}>Subscribe Now</button>
            </a>
            <Link to="/Jobs" style={backLinkStyle}>Back to job page</Link>
        </div>
    );
};

const containerStyle = {
    backgroundColor: '#121212', // Dark background color
    color: '#fff', // Text color
    padding: '40px', // Padding around the content
    textAlign: 'center', // Center-align content
    borderRadius: '10px', // Rounded corners
    maxWidth: '600px', // Limit width for better readability
    margin: 'auto', // Center the container horizontally
    display: 'flex', // Use flexbox
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Center items vertically
    minHeight: '100vh', // Ensure full viewport height
};

const titleStyle = {
    fontSize: '36px', // Larger font size for title
    marginBottom: '20px', // Spacing below title
};

const textStyle = {
    fontSize: '18px', // Medium font size for text
    marginBottom: '10px', // Spacing below text
};

const listStyle = {
    listStyleType: 'none', // Remove bullet points from list
    paddingLeft: '0', // Remove default list padding
};

const listItemStyle = {
    fontSize: '16px', // Smaller font size for list items
    marginBottom: '5px', // Spacing below list items
};

const subscribeButtonStyle = {
    backgroundColor: '#4fb075', // Apply Now button color
    border: 'none',
    color: 'white',
    padding: '15px 30px',
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px', // Larger font size for button text
};

const backLinkStyle = {
    color: '#4fb075', // Apply Now button color
    marginTop: '20px',
    display: 'block',
    textDecoration: 'none',
    fontSize: '16px', // Medium font size for link text
};

export default Primium;
