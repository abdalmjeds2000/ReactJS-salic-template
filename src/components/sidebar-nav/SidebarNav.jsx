import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import './SidebarNav.css';
import { ReactComponent as NavButton } from '../../icons/icons-menu/Group-763.svg';
import { ReactComponent as HomeIcon } from '../../icons/icons-menu/Iconly-Light-Home.svg';
import { ReactComponent as ApplicationsIcon } from '../../icons/icons-menu/Iconly-Light-Category.svg';
import { ReactComponent as LocationsIcon } from '../../icons/icons-menu/Iconly-Light-Discovery.svg';
import { ReactComponent as CommunicationIcon } from '../../icons/icons-menu/Iconly-Light-Calling.svg';
import { ReactComponent as NotesIcon } from '../../icons/icons-menu/Iconly-Light-Paper.svg';


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const SidebarNav = (props) => {

  let listItems = [
    {index: 0, to: '/', icon: <HomeIcon/>, text: <p>Home</p>}, 
    {index: 1, to: '/applications', icon: <ApplicationsIcon/>, text: <p>Applications</p>}, 
    {index: 2, to: '/locations', icon: <LocationsIcon/>, text: <p>Locations</p>},
    {index: 3, to: '/communication', icon: <CommunicationIcon/>, text: <p>Communication</p>},
    {index: 4, to: '/notes', icon: <NotesIcon/>, text: <p>Notes</p>},
  ];
  let activeStyle = {
    borderLeft: "5px solid var(--second-color)",
  };
  
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isNavBarLarge, setIsNavBarLarge] = useState(false);


  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <nav 
      className={isNavBarLarge? "nav-container nav-container-large": "nav-container nav-container-small"} 
      style={(windowSize.innerWidth < 992 && !isNavBarLarge) ? {padding: 0} : {}}
    >

      <div>
        <NavButton onClick={() => setIsNavBarLarge(!isNavBarLarge)}/>
      </div>

      <ul style={(windowSize.innerWidth < 992 && !isNavBarLarge) ? {display: 'none'} : {padding: '20px 0'}}>
        {listItems.map(({ to, icon, text, index }) => {
          return <li key={index}>
            <NavLink 
              to={to} 
              className={!isNavBarLarge? 'centered-icons-mobile': 'centered-icons-disktop'} 
              style={({ isActive }) => isActive ? activeStyle : {opacity: "0.7"} }
            >
              {icon}
              {isNavBarLarge && text}
            </NavLink>
          </li>
        })}
      </ul>

    </nav>
  )
}

export default SidebarNav