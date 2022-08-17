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
import RegisterNewAssets from '../components/Home/Separate Pages/9 Boxes/IT Services/Register New Assets/RegisterNewAssets.jsx';
import Shipment from '../components/Home/Separate Pages/9 Boxes/Admin Services/Shipment Request/Shipment.jsx';
import Maintenance from '../components/Home/Separate Pages/9 Boxes/Admin Services/Maintenance/Maintenance.jsx';
import VISAVisitorRequest from '../components/Home/Separate Pages/9 Boxes/Admin Services/Visitor/VISAVisitorRequest.jsx';
import TransportationRequest from '../components/Home/Separate Pages/9 Boxes/Admin Services/Transportation/TransportationRequest.jsx';
import BusinessGate from '../components/Home/Separate Pages/9 Boxes/Admin Services/Business Gate/BusinessGate.jsx';
import IssuingVISA from '../components/Home/Separate Pages/9 Boxes/Admin Services/Issuing VISA/IssuingVISA.jsx';
import OfficeSupply from '../components/Home/Separate Pages/9 Boxes/Admin Services/Office Supply/OfficeSupply.jsx';
import NotificationCenter from '../components/Notification Center/NotificationCenter.jsx';

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


      <Route path="/admin-services">
        <Route index element={<AdminServices />} />
        <Route path='/admin-services/shipment' element={<Shipment />} />
        <Route path='/admin-services/maintenance' element={<Maintenance />} />
        <Route path='/admin-services/visitor' element={<VISAVisitorRequest />} />
        <Route path='/admin-services/transportation' element={<TransportationRequest />} />
        <Route path='/admin-services/business-gate' element={<BusinessGate />} />
        <Route path='/admin-services/issuing-VISA' element={<IssuingVISA />} />
        <Route path='/admin-services/office-supply' element={<OfficeSupply />} />
      </Route>
      <Route path="/it-services">
        <Route index element={<ITServices />} />
        <Route path="/it-services/services-request" element={<NewITServiceRequest />} />
        <Route path="/it-services/new-asset" element={<RegisterNewAssets />} />
      </Route>
      <Route path="/hr-self-services" element={<HRSelfServices />} />
      <Route path="/notification-center" element={<NotificationCenter />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes