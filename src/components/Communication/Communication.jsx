import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../Context/userContext';
import './Communication.css';

import OrgChart from './mytree';
import WorldBG from '../../icons/home/world.svg';







function Communication() {


  const { communicationList } = useContext(UserContext);


  return (
    <div style={{position: 'relative', top: '50px', minHeight: 'calc(100vh - 50px)'}}>
      <img src={WorldBG} className='img-bg' alt="world background" />
      {
        communicationList.length > 0 
        ? <OrgChart nodes={communicationList} />
        : <div className="loader"><div></div></div>
      }
      
  </div>
  )
}

export default Communication