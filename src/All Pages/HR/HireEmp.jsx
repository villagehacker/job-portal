// HRDashboard.jsx
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

  return (
    <div>
      <h1>HR Dashboard</h1>
      <div className="profile-list">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <h2>{profile.name}</h2>
            <p><strong>Position:</strong> {profile.position}</p>
            <p><strong>Skills:</strong> {profile.skills.join(', ')}</p>
            <button onClick={() => console.log(`Hire ${profile.name}`)}>Hire</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HireEmp;
