// HRProfilePage.jsx
import React, { useState } from 'react';

const HRProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Street, City, Country',
    profilePhoto: null,
  });
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState(''); // Initialize phoneError state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setProfileData({
      ...profileData,
      profilePhoto: file,
    });
  };

  const handleEditProfileClick = () => {
    setIsEditing(true);
  };

  const handleSaveChangesClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(profileData.email)) {
      setEmailError('Enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
    if (profileData.phone.length !== 10) {
      setPhoneError('Enter a valid phone number (10 digits)');
      return;
    } else {
      setPhoneError('');
    }
    setIsEditing(false);
    console.log("Profile data:", profileData);
    // Here you can implement logic to save the changes
  };

  return (
    <div style={{ backgroundColor: '#1f1f1f', color: '#fff', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h2>HR Profile</h2>
      <div>
        <div style={{ marginBottom: '20px' }}>
          {profileData.profilePhoto && (
            <img src={URL.createObjectURL(profileData.profilePhoto)} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
          )}
        </div>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div style={profileItem}>
            <label htmlFor="fullName">Full Name:</label>
            {isEditing ? (
              <input type="text" id="fullName" name="fullName" value={profileData.fullName} onChange={handleInputChange} />
            ) : (
              <p>{profileData.fullName}</p>
            )}
          </div>
          <div style={profileItem}>
            <label htmlFor="email">Email:</label>
            {isEditing ? (
              <>
                <input type="email" id="email" name="email" value={profileData.email} onChange={handleInputChange} />
                <div style={{ color: 'red' }}>{emailError}</div>
              </>
            ) : (
              <p>{profileData.email}</p>
            )}
          </div>
          <div style={profileItem}>
            <label htmlFor="phone">Phone:</label>
            {isEditing ? (
              <>
                <input type="tel" id="phone" name="phone" value={profileData.phone} onChange={handleInputChange} />
                <div style={{ color: 'red' }}>{phoneError}</div>
              </>
            ) : (
              <p>{profileData.phone}</p>
            )}
          </div>
          <div style={profileItem}>
            <label htmlFor="address">Address:</label>
            {isEditing ? (
              <input type="text" id="address" name="address" value={profileData.address} onChange={handleInputChange} />
            ) : (
              <p>{profileData.address}</p>
            )}
          </div>
          <div style={profileItem}>
            <label htmlFor="profilePhoto">Change Profile Photo:</label>
            {isEditing && (
              <input type="file" id="profilePhoto" name="profilePhoto" onChange={handleFileInputChange} accept="image/*" style={{ margin: '10px auto' }} />
            )}
          </div>
          {isEditing ? (
            <button style={saveButtonStyle} onClick={handleSaveChangesClick}>Save Changes</button>
          ) : (
            <button style={editButtonStyle} onClick={handleEditProfileClick}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

const profileItem = {
  marginBottom: '20px',
};

const editButtonStyle = {
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const saveButtonStyle = {
  ...editButtonStyle,
  backgroundColor: '#1e88e5',
};

export default HRProfilePage;