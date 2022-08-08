import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

import Navbar from "./components/navbar/Navbar.jsx";
import SidebarNav from './components/sidebar-nav/SidebarNav.jsx';
import Home from './components/Home/Home.jsx';
import Applications from './components/Applications/Applications.jsx';
import CommunityNews from "./components/Home/Separate Pages/Community News/CommunityNews";
import Attendance from "./components/Home/Separate Pages/Attendance/Attendance";

import AdminServices from './components/Home/Separate Pages/9 Boxes/Admin Services/AdminServices.jsx';
import ITServices from './components/Home/Separate Pages/9 Boxes/IT Services/ITServices.jsx';
import HRSelfServices from './components/Home/Separate Pages/9 Boxes/HR Self Services/HRSelfServices.jsx';
import UserPanel from "./components/global/User Panel/UserPanel";

import logo from './icons/icons-menu/logo.jpg';

import { UserContext } from './Context/userContext'

import axios from "axios";

const Locations = () => { return <h1>Locations</h1> }
const Communication = () => { return <h1>Communication</h1> }
const Notes = () => { return <h1>Notes</h1> }
const NotFoundPage = () => { return <h1>NotFoundPage</h1> }




const App = () => {


  
  const [userData, setUserData] = useState({});
  const [notificationsCount, setNotificationsCount] = useState('');
  const [mailCount, setMailCount] = useState('');
  const [latestAttendance, setLatestAttendance] = useState([]);
  useEffect(() => {
    // Get User Data
    axios({
      method: 'GET',
      url: 'https://salicapi.com/api/User/GetUserByEmail?Expand=manager&Email=abdulmohsen.alaiban@salic.com',
    })
    .then((response) => {
      console.log(response.data)
      setUserData(response.data)
      return response
    })
    // GetNotifications Count #1
    .then((response) => {
      axios({ method: 'GET', url: `https://salicapi.com/api/Integration/ERPApprovalCount?PIN=${response.data.Data?.PIN}`})
      .then((res) => { setNotificationsCount(res.data.Data) })
      .catch((error) => { console.log(error) })

      return response
    })
    // Get Notifications Count #2
    .then((response) => {
      axios({ method: 'GET', url: `https://salicapi.com/api/Integration/PendingApprovalCount?PIN=${response.data.Data?.Mail}`})
      .then((res) => { setNotificationsCount(prev => prev + res.data.Data) })
      .catch((error) => { console.log(error) })
      
      return response
    })
    // Get Mail Count
    .then((response) => {
      axios({ method: 'GET', url: `https://salicapi.com/api/User/GetUnReadMessags?UserId=${response.data.Data?.GraphId}`})
      .then((res) => { setMailCount(res.data.Data) })
      .catch((error) => { console.log(error) })

      return response
    })
    // Get Latest Attendance
    .then((response) => {
      axios({ method: 'POST', url: `https://salicapi.com/api/attendance/Get`, 
        data: {
          Email: response.data.Data.Mail,
          Month: new Date().getMonth()+1,
          Year: new Date().getUTCFullYear(),
          status: -1
        }})
      .then((res) => { setLatestAttendance(res.data.Data) })
      .catch((error) => { console.log(error) })
      
    })

    .catch((error) => { console.log(error) })
  }, [])



  return ( 
    <UserContext.Provider value={{
      user_data: userData,
      notifications_count: notificationsCount,
      mail_count: mailCount,
      latest_attendance: latestAttendance
    }}>
      {
        userData.Data?.DisplayName?.length > 0
        ? <Router>
            <div className="app-container">
              <SidebarNav />
              <div className="content-container">
                <Navbar />
                <Routes>
                  <Route index path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/applications" element={<Applications />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/communication" element={<Communication />} />
                  <Route path="/notes" element={<Notes />} />
                  
                  <Route path="/community-news" element={<CommunityNews />} />
                  <Route path="/attendance" element={<Attendance />} />

                  <Route path="/admin-services" element={<AdminServices />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/hr-self-services" element={<HRSelfServices />} />

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          </Router>
        : <div class="loader">  
            <img src={logo} alt="salic logo" style={{maxWidth: '250px', textAlign: 'center'}} />
            <div></div>
          </div>
      }
      
    </UserContext.Provider>
  )
}

export default App