import React, { useState, useEffect, useContext } from "react";
import './Home.css';
import { Carousel } from 'antd';
import SALICUK from '../../icons/home/Companys/SALIC UK.png'

import PersonInfo from "./Left Divisions/Person/PersonInfo";
import PersonMobile from "./Left Divisions/Person Mobile/PersonMobile";
import NumbersAttendance from "./Left Divisions/Numbers & Attendance/Numbers&Attendance";
import Services from "./Left Divisions/Services/Services";
import ThreeDivisions from './all-width/Three Divisions/ThreeDivisions';
import TranslateConverterNotes from './all-width/Translate Converter Notes/TranslateConverterNotes'
import HistoryNavigation from './Separate Pages/History Navigation/HistoryNavigation'


import Navbar from "../navbar/Navbar";
import UserPanel from "../global/User Panel/UserPanel";
import { UserContext } from "../../Context/userContext";
import GlobeE3 from "./Right Division/Globe/Globe";



function getScrollY() {
  const isScroll = window.scrollY > 0 ? true : false;
  return isScroll;
}

const Home = (props) => {
  const { user_data, notifications_count, mail_count, isGlobeReady } = useContext(UserContext);

  const [scrollSize, setScrollSize] = useState(getScrollY());
  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
    function handleScrollY() {setScrollSize(getScrollY())}
    window.addEventListener('scroll', handleScrollY);
  }, []);


  return <div className="home-container" style={{display: !isGlobeReady ? 'none' : ''}}>
          <Navbar style={{width: '100%', position: 'fixed', zIndex: '4', display: !scrollSize ? 'none' : ''}}>
            <UserPanel 
              mobile={user_data.Data?.Mobile}
              mailTo='https://outlook.office.com/owa/'
              mailCount={mail_count}
              notificationsCount={notifications_count}
              userName={user_data.Data?.DisplayName}
              userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
            />
          </Navbar>
          <div style={{display: !scrollSize ? 'none' : ''}}>
            <HistoryNavigation>
              <p>Home Page</p>
            </HistoryNavigation>
          </div>
          
          <div className="container">
            <PersonInfo />
            <PersonMobile />
            <div className="home-division">
              <div className="home-info">
                <NumbersAttendance />
                <Services />
              </div>
      
              <div className="home-world-graph">
                <GlobeE3 />
              </div>
            </div>
      
            <ThreeDivisions />
            <TranslateConverterNotes />
          </div>
        </div>
}

export default Home