// App.js

import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './All Pages/login';
import Signup from './All Pages/signup'; // Import the Signup component
import InitialPage from './All Pages/initialPage';
// import BackgroundGlobe from './BackgroundGlobe';
// import JobPage from './All Pages/JobPage';
import JobsCategory from './All Pages/JobsCategory';
// import MenuBar from '../src/All Pages/MenuBar';
import HrLogin from './All Pages/HrLogin';
import Jobs from './All Pages/jobs';
import UserProfilePage from './All Pages/userProfile';
import AppliedJobs from './All Pages/AppliedJobs';
import AboutUs from './All Pages/AboutUs';
import Settings from './All Pages/Settings/Setting';
import Courses from './All Pages/Courses';
import FavCourses from './All Pages/FavCourses';
import Primium from './All Pages/Primium';
import HrDashboard from './All Pages/HR/HR-dashboard';
import OurJobs from './All Pages/HR/OurJobs';
import Applicants from './All Pages/HR/Applicants';
import HrProfile from './All Pages/HR/Hr-Profile';
import HireEmp from './All Pages/HR/HireEmp';
import PostJobPage from './All Pages/HR/PostNewJobs';
import HRProfilePage from './All Pages/HR/Hr-Profile';
import ApplyJobs from './All Pages/applyjobs';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hr-login" element={<HrLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job-page" element={<JobsCategory />} />
        <Route path="/Jobs" element={<Jobs />} /> 
        <Route path="/user-profile" element={<UserProfilePage />} /> 
        <Route path="/applied-jobs" element={<AppliedJobs />} /> 
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/settings" element={<Settings />} /> 
        <Route path="/courses" element={<Courses />} /> 
        <Route path="/fav-courses" element={<FavCourses />} /> 
        <Route path="/primium" element={<Primium />} /> 
        <Route path="/hr-dashboard" element={<HrDashboard />} /> 
        <Route path="/our-jobs" element={<OurJobs />} /> 
        <Route path="/applicants" element={<Applicants />} /> 
        <Route path="/hr-profile" element={<HrProfile />} /> 
        <Route path="/hire" element={<HireEmp />} /> 
        <Route path="/post-new-job" element={<PostJobPage />} /> 
        <Route path="/hr-profile-page" element={<HRProfilePage />} /> 
        <Route path="/logout" element={<HrLogin />} />
        <Route path="/apply-jobs" element={<ApplyJobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
