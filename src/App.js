// App.js

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './All Pages/login';
import Signup from './All Pages/signup'; // Import the Signup component
import InitialPage from './All Pages/initialPage';
import BackgroundGlobe from './BackgroundGlobe';
import JobPage from './All Pages/JobPage';
import JobsCategory from './All Pages/JobsCategory';
import MenuBar from '../src/All Pages/MenuBar';
import jobs from '../src/All Pages/components/Jobs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job-page" element={<JobsCategory />} />
        <Route path="jobs" elements={<jobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
