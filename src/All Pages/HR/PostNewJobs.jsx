// PostJobPage.jsx
import React, { useState } from 'react';

const PostJobPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    location: '',
    jobTitle: '',
    jobDescription: '',
    experience: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or perform other actions
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      companyName: '',
      location: '',
      jobTitle: '',
      jobDescription: '',
      experience: '',
      salary: '',
    });
  };

  return (
    <div style={{ backgroundColor: '#1f1f1f', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h2>Post New Job</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={inputContainer}>
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={inputContainer}>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={inputContainer}>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={inputContainer}>
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} required style={{ ...inputStyle, height: '100px' }} />
        </div>
        <div style={inputContainer}>
          <label htmlFor="experience">Experience:</label>
          <input type="text" id="experience" name="experience" value={formData.experience} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={inputContainer}>
          <label htmlFor="salary">Salary:</label>
          <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} required style={inputStyle} />
        </div>
        <button type="submit" style={submitButtonStyle}>Submit</button>
      </form>
    </div>
  );
};

const inputContainer = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#333',
  color: '#fff',
};

const submitButtonStyle = {
  ...inputStyle,
  backgroundColor: '#4CAF50',
  cursor: 'pointer',
};

export default PostJobPage;
