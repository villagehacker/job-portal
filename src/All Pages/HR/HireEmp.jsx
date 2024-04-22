import React, { useState, useEffect } from 'react';

const HireEmp = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from API
    // Example: fetch('api/profiles').then(response => response.json()).then(data => setProfiles(data));
    // For this example, let's assume profiles are fetched from an API
    const mockData = [
      { id: 1, name: 'John Doe', position: 'Software Engineer', skills: ['JavaScript', 'React', 'Node.js'] },
      { id: 2, name: 'Jane Smith', position: 'UX Designer', skills: ['UI/UX Design', 'Figma', 'Adobe XD'] },
    ];
    setProfiles(mockData);
  }, []);

  // Dark theme CSS
  const darkThemeCSS = `
    .profile-list-container {
      display: flex;
      justify-content: center;
      margin-top: 20px; /* Adjust the margin as needed */
    }

    .profile-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      list-style-type: none;
      padding: 0;
    }

    .profile-card {
      background-color: #333;
      color: #fff;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
    }

    .profile-card h2 {
      margin-bottom: 10px;
      text-align: center; /* Align profile names to center */
    }

    .profile-card p {
      margin: 5px 0;
    }

    .profile-card button {
      background-color: #4fb075;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      display: block; /* Display buttons as block elements */
      margin: 10px auto; /* Center align buttons */
    }

    .profile-card button:hover {
      background-color: #3a8b5f;
    }
  `;

  const handleHire = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Hire Employees</h1>
      <div className="profile-list-container">
        {/* Apply dark theme styles */}
        <style>{darkThemeCSS}</style>
        <ul className="profile-list">
          {profiles.map(profile => (
            <li key={profile.id} className="profile-card">
              <h2>{profile.name}</h2>
              <p><strong>Position:</strong> {profile.position}</p>
              <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
              <button onClick={() => handleHire(profile.id)}>Hire</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HireEmp;
