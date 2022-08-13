import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../Context/userContext';
import './Communication.css';

import OrgChart from './mytree';







function Communication() {


  const { communicationList } = useContext(UserContext);


  return (
    <div style={{position: 'relative', top: '50px'}}>
      <div id='custom-tree' style={{display: 'none'}}>
      hello world
      </div>
      {
        communicationList.length > 0 
        ? <OrgChart nodes={communicationList} />
        : <div className="loader"><div></div></div>
      }
      
  </div>
  )
}

export default Communication