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

  return ( 
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
  )
}

export default App