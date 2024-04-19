import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyJobs = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onFormSubmit = () => {
    if (name === "" || email === "" || phone === "") {
      alert("Please fill all the fields");
    } else {
      alert("Your Job Application has been Applied Successfully");
      navigate("/Jobs");
    }
  };

  return (
    <div style={{ backgroundColor: '#1f1f1f', color: '#fff', padding: '20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '500px' }}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px' }}>Fill the form</h1>
        </header>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Enter Your Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#333', color: '#fff' }}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Enter Your Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#333', color: '#fff' }}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '5px' }}>Enter Your Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              className="form-control"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd', backgroundColor: '#333', color: '#fff' }}
              placeholder="Enter Your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Upload Your Resume</label>
            <input type="file" id="myFile" name="filename" style={{ display: 'block', marginTop: '5px' }} required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              type="submit"
              className="submit-button"
              onClick={onFormSubmit}
              style={{ backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobs;
