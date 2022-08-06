import React, { useEffect, useState } from "react";
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

import AdminServices from './components/Home/Separate Pages/Admin Services/AdminServices.jsx';
import ITServices from './components/Home/Separate Pages/IT Services/ITServices.jsx';
import HRSelfServices from './components/Home/Separate Pages/HR Self Services/HRSelfServices.jsx';
import UserPanel from "./components/global/User Panel/UserPanel";
import { UserContext } from './Context/userContext'

import axios from "axios";

const Locations = () => { return <h1>Locations</h1> }
const Communication = () => { return <h1>Communication</h1> }
const Notes = () => { return <h1>Notes</h1> }
const NotFoundPage = () => { return <h1>NotFoundPage</h1> }


function getScrollY() {
  const isScroll = window.scrollY > 0 ? true : false;
  return isScroll;
}
const App = () => {

  const [windowSize, setWindowSize] = useState(getScrollY());

  useEffect(() => {
    function handleScrollY() {
      setWindowSize(getScrollY());
    }
    window.addEventListener('scroll', handleScrollY);
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  }, []);


  
  const [userData, setUserData] = useState({});
  const [notificationsCount, setNotificationsCount] = useState('');
  const [mailCount, setMailCount] = useState('');
  const [latestAttendance, setLatestAttendance] = useState([]);
  
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://salicapi.com/api/User/GetUserByEmail?Expand=manager&Email=abdulmohsen.alaiban@salic.com',
    })
    .then((response) => {
      console.log(response.data)
      setUserData(response.data)
      return response
    })
    // Notifications Count #1
    .then((response) => {
      axios({ method: 'GET', url: `https://salicapi.com/api/Integration/ERPApprovalCount?PIN=${response.data.Data?.PIN}`})
      .then((res) => { setNotificationsCount(res.data.Data) })
      .catch((error) => { console.log(error) })

      return response
    })
    // Notifications Count #2
    .then((response) => {
      axios({ method: 'GET', url: `https://salicapi.com/api/Integration/PendingApprovalCount?PIN=${response.data.Data?.Mail}`})
      .then((res) => { setNotificationsCount(prev => prev + res.data.Data) })
      .catch((error) => { console.log(error) })
      
      return response
    })
    // Mail Count
    .then((response) => {
      axios({ method: 'GET', url: `https://salicapi.com/api/User/GetUnReadMessags?UserId=${response.data.Data?.GraphId}`})
      .then((res) => { setMailCount(res.data.Data) })
      .catch((error) => { console.log(error) })

      return response
    })

    .then((response) => {
      axios({ method: 'post', url: `https://salicapi.com/api/attendance/Get`, 
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
      <Router>
        <div className="app-container">
          <SidebarNav />
          <div className="content-container">
            <Navbar />
            {
              windowSize
              ? <Navbar style={{width: '100%', position: 'fixed', zIndex: '4'}}>
                <UserPanel />
              </Navbar>
              : <></>
            }
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
    </UserContext.Provider>
  )
}

export default App