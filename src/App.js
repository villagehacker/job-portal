import React from 'react';
import Login from './All Pages/login';
import InitialPage from './All Pages/initialPage';
import BackgroundGlobe from './BackgroundGlobe';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
