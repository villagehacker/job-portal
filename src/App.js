import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './All Pages/login';
import InitialPage from './All Pages/initialPage';
import BackgroundGlobe from './BackgroundGlobe';
import JobPage from './All Pages/JobPage';
import JobsCategory from './All Pages/JobsCategory';
import MenuBar from '../src/All Pages/MenuBar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job-page" element={<JobsCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
