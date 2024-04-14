// App.js

import React from 'react';
import Login from './All Pages/login';
import Signup from './All Pages/signup'; // Import the Signup component
import InitialPage from './All Pages/initialPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add route for the sign-up page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
