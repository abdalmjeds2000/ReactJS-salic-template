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

  const [isLoading, setIsLoading] = useState(true); 

  const [userData, setUserData] = useState({});
  const [notificationsCount, setNotificationsCount] = useState('');
  const [mailCount, setMailCount] = useState('');
  const [latestAttendance, setLatestAttendance] = useState([]);
  const [communicationList, setCommunicationList] = useState([]);
  const [notificationCenterData, setNotificationCenterData] = useState([]);
  const [globeData, setGlobeData] = useState({});
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  


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
    // Disable Loader
    .then((response) => {setIsLoading(false); return response})

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
      .then((res) => setLatestAttendance(res.data.Data))
      .catch((error) => { console.log(error) })
      
    })
    // Get Communication List
    .then(() => {
      axios({ method: 'GET', url: 'https://salicapi.com/api/User/GetCommunicationList'})
      .then((res) => { setCommunicationList(res.data.Data) })
      .catch((error) => { console.log(error) })
    })
    // Get Globe Data 
    .then(() => {
      axios({
        method: 'GET',
        url: 'https://vasturiano.github.io/react-globe.gl/example/datasets/ne_110m_admin_0_countries.geojson'
      }).then(res => setGlobeData(res.data))})
    .catch((error) => { console.log(error) })


    //Get Notification Center Data
    axios({ 
      method: 'GET', 
      url: 'https://salicapi.com/api/notificationcenter/Get?Email=stsadmin@salic.onmicrosoft.com&draw=86&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=asc&start=0&length=-1&search%5Bvalue%5D=&search%5Bregex%5D=false&%24orderby=Created+desc&%24top=1&Type=eSign&Status=Pending%2CApproved%2CRejected&_=1660747052191'
    })
    .then((res) => { 
      const notifi_data = res.data?.Data?.map((n, i) => {
        const newRow = {
          key: i,
          id: `${i+1}`,
          subject: <><h3>{n.Title}</h3>{n.BodyPreview}</>,
          dateTime: n.Created.slice(0, -3).replace('T', ' '),
          status: n.Status,
          From: n.From,
          action: <a href="/">View Document</a>
        }
        return newRow
      })
      setNotificationCenterData(notifi_data);
    })

    axios({
      method: 'POST',
      url: 'https://salic.sharepoint.com/sites/newsalic/SitePages/Home/_api/contextinfo',
      headers: {
        'Access-Control-Allow-Methods': 'OPTIONS',
        "Origin": "https://salic.sharepoint.com",
        "Access-Control-Allow-Origin": "https://salic.sharepoint.com",
        // "Access-Control-Allow-Origin": "*"
      }
    }).then((res) => console.log(res))
    .catch((err) => console.log(err))
  }, [])

  const toggleGlobeReady = () => {
    setIsGlobeReady(true)
  }

  return ( 
    <UserContext.Provider value={{
      user_data: userData,
      notifications_count: notificationsCount,
      mail_count: mailCount,
      latest_attendance: latestAttendance,
      communicationList: communicationList,
      notification_center_data: notificationCenterData,
      globe_data: globeData,
      isGlobeReady,
      toggleGlobeReady
    }}>
      {
        !isLoading
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