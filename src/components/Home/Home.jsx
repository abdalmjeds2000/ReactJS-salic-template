import React, { useState, useEffect } from "react";
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
import VisionLogo from '../../icons/home/2030-vision-logo.svg';



function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



const Home = (props) => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return <div className="home-container">
    <img src={worldIllustration} alt='map' className="_worldMap" />
    <div className="container">


      <div className="home-division">
        <div className="home-info">
          {windowSize.innerWidth > 1090 ? <PersonInfo /> : <PersonMobile />}
          <NumbersAttendance />
          <Services />
        </div>

        <div className="home-world-graph">
          {windowSize.innerWidth > 1090 ? <img src={VisionLogo} alt='2030 Vision Logo' className="vision-logo-2030" /> : null}
          <CompanyCard
            logoSrc={MerredinLogo}
            companyName='Merredin Farms'
            companyLocation='Australia,'
            companyDescription= {windowSize.innerWidth > 1090 && 'Merredin Farms is one of Australia’s largest farming companies with arable lands extending over 211k ha in western Australia, in addition to a flock of more than 35k Merino sheep.'}
            top={windowSize.innerWidth > 1090 ? '2%' : '100px'}
            right={windowSize.innerWidth < 1090 ? '-10%' : '-25%'}
            float={windowSize.innerWidth < 1090 ? 'left' : ''}
            logo_name_vertical={ windowSize.innerWidth < 1090 ? {flexDirection: 'column'} : {} }
          />
          <CompanyCard
            logoSrc={DawatLogo}
            companyName='Daawat'
            companyLocation='India, Saket, New Delhi'
            companyDescription={windowSize.innerWidth > 1090 && 'Daawat is India’s Finest Basmati Rice, which is produced by one of the leading Basmati rice manufacturers in the country, LT Foods Ltd.'}
            top={windowSize.innerWidth > 1090 ? '20%' : '100px'}
            right={windowSize.innerWidth < 1090 ? '10%' : '-45%'}
            float={windowSize.innerWidth < 1090 ? 'right' : ''}
            logo_name_vertical={ windowSize.innerWidth < 1090 ? {flexDirection: 'column'} : {} }
          />
        </div>
      </div>

      <ThreeDivisions />

      <TranslateConverterNotes />

    </div>
  </div>
}

export default Home