import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from "./components/navbar/Navbar.jsx";
import SidebarNav from './components/sidebar-nav/SidebarNav.jsx';

import logo from './icons/icons-menu/logo.jpg';

import { UserContext } from './Context/userContext'

import axios from "axios";
import AppRoutes from "./Routes/AppRoutes";





const App = () => {


  const [userData, setUserData] = useState({});
  const [notificationsCount, setNotificationsCount] = useState('');
  const [mailCount, setMailCount] = useState('');
  const [latestAttendance, setLatestAttendance] = useState([]);
  const [communicationList, setCommunicationList] = useState([]);
  

  
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
    // Get Communication List
    .then(() => {
      axios({ method: 'GET', url: 'https://salicapi.com/api/User/GetCommunicationList'})
      .then((res) => { setCommunicationList(res.data.Data) })
      .catch((error) => { console.log(error) })
    })

    .catch((error) => { console.log(error) })
  }, [])



  return ( 
    <UserContext.Provider value={{
      user_data: userData,
      notifications_count: notificationsCount,
      mail_count: mailCount,
      latest_attendance: latestAttendance,
      communicationList: communicationList
    }}>
      {
        userData.Data?.DisplayName?.length > 0
        
        ? <Router>
            <div className="app-container">
              <SidebarNav />
              <div className="content-container">
                <Navbar />
                <AppRoutes />
              </div>
            </div>
          </Router>

        : <div className="loader">  
            <img src={logo} alt="salic logo" style={{maxWidth: '250px', textAlign: 'center'}} />
            <div></div>
          </div>
      }
      
    </UserContext.Provider>
  )
}

export default App