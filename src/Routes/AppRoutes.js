import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';


import Home from '.././components/Home/Home.jsx';
import Communication from ".././components/Communication/Communication.jsx";
import Applications from '.././components/Applications/Applications.jsx';
import CommunityNews from ".././components/Home/Separate Pages/Community News/CommunityNews";
import Attendance from ".././components/Home/Separate Pages/Attendance/Attendance";

import AdminServices from '.././components/Home/Separate Pages/9 Boxes/Admin Services/AdminServices.jsx';
import ITServices from '.././components/Home/Separate Pages/9 Boxes/IT Services/ITServices.jsx';
import NewITServiceRequest from '.././components/Home/Separate Pages/9 Boxes/IT Services/New IT Service Request/NewITServiceRequest.jsx';
import HRSelfServices from '.././components/Home/Separate Pages/9 Boxes/HR Self Services/HRSelfServices.jsx';

const Locations = () => { return <h1>Locations</h1> }
const Notes = () => { return <h1>Notes</h1> }
const NotFoundPage = () => { return <h1>NotFoundPage</h1> }





function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Navigate replace to="/"/>} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/communication" element={<Communication />} />
      <Route path="/notes" element={<Notes />} />
      
      <Route path="/community-news" element={<CommunityNews />} />
      <Route path="/attendance" element={<Attendance />} />


      <Route path="/admin-services" element={<AdminServices />} />
      <Route path="/it-services">
        <Route index element={<ITServices />} />
        <Route path="/it-services/services-request" element={<NewITServiceRequest />} />
      </Route>
      <Route path="/hr-self-services" element={<HRSelfServices />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes