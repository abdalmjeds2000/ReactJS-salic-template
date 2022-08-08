import React, { useState, useEffect, useContext } from "react";
import './Home.css';

import PersonInfo from "./Left Divisions/Person/PersonInfo";
import PersonMobile from "./Left Divisions/Person Mobile/PersonMobile";
import CompanyCard from './Right Division/Company Card/CompanyCard';
import NumbersAttendance from "./Left Divisions/Numbers & Attendance/Numbers&Attendance";
import Services from "./Left Divisions/Services/Services";
import ThreeDivisions from './all-width/Three Divisions/ThreeDivisions';
import TranslateConverterNotes from './all-width/Translate Converter Notes/TranslateConverterNotes'

import MerredinLogo from '../../icons/home/merredin_logo.png'
import DawatLogo from '../../icons/home/dawat_logo.png'

import worldIllustration from '../../icons/home/world.svg';
import Navbar from "../navbar/Navbar";
import UserPanel from "../global/User Panel/UserPanel";
import { UserContext } from "../../Context/userContext";



function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
function getScrollY() {
  const isScroll = window.scrollY > 0 ? true : false;
  return isScroll;
}






const Home = (props) => {

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [scrollSize, setScrollSize] = useState(getScrollY());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    function handleScrollY() {
      setScrollSize(getScrollY());
    }
    window.addEventListener('scroll', handleScrollY);
  }, []);



  const { user_data } = useContext(UserContext);
  const { notifications_count } = useContext(UserContext);
  const { mail_count } = useContext(UserContext);




  return <div className="home-container">
    {
      scrollSize
      ? <Navbar style={{width: '100%', position: 'fixed', zIndex: '4'}}>
        <UserPanel 
          mobile={user_data.Data?.Mobile}
          mailTo='https://outlook.office.com/owa/'
          mailCount={mail_count}
          notificationsCount={notifications_count}
          userName={user_data.Data?.DisplayName}
          userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
        />
      </Navbar>
      : <></>
    }
    <div className="container">
      <div className="home-division">
        <div className="home-info">
          {windowSize.innerWidth > 600 ? <PersonInfo /> : <PersonMobile />}
          <NumbersAttendance />
          <Services />
        </div>

        <div className="home-world-graph">
          <img src={worldIllustration} alt='map' className="_worldMap" />
          
          {/* <CompanyCard
            logoSrc={MerredinLogo}
            companyName='Merredin Farms'
            companyLocation='Australia,'
            companyDescription= {windowSize.innerWidth > 800 && 'Merredin Farms is one of Australia’s largest farming companies with arable lands extending over 211k ha in western Australia, in addition to a flock of more than 35k Merino sheep.'}
            top={windowSize.innerWidth > 800 ? '2%' : '100px'}
            right={windowSize.innerWidth < 800 ? '-10%' : '-25%'}
            float={windowSize.innerWidth < 800 ? 'left' : ''}
            logo_name_vertical={ windowSize.innerWidth < 800 ? {flexDirection: 'column'} : {} }
          />
          <CompanyCard
            logoSrc={DawatLogo}
            companyName='Daawat'
            companyLocation='India, Saket, New Delhi'
            companyDescription={windowSize.innerWidth > 800 && 'Daawat is India’s Finest Basmati Rice, which is produced by one of the leading Basmati rice manufacturers in the country, LT Foods Ltd.'}
            top={windowSize.innerWidth > 800 ? '20%' : '100px'}
            right={windowSize.innerWidth < 800 ? '10%' : '-45%'}
            float={windowSize.innerWidth < 800 ? 'right' : ''}
            logo_name_vertical={ windowSize.innerWidth < 800 ? {flexDirection: 'column'} : {} }
          /> */}
        </div>
      </div>

      <ThreeDivisions />
      <TranslateConverterNotes />

    </div>
  </div>
}

export default Home