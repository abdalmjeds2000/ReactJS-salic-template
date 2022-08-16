import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../Context/userContext';
import './Communication.css';

import OrgChart from './mytree';
import WorldBG from '../../icons/home/world.svg';
import SimpleUserPanel from '../global/Simple User Panel/SimpleUserPanel';
import HistoryNavigation from '../Home/Separate Pages/History Navigation/HistoryNavigation';







function Communication() {


  const { communicationList } = useContext(UserContext);
  const { user_data } = useContext(UserContext);
  const { notifications_count } = useContext(UserContext);
  const { mail_count } = useContext(UserContext);


  return (
    <div style={{position: 'relative', top: '85px', minHeight: 'calc(100vh - 85px)'}}>
      <HistoryNavigation>
        <p>Communication</p>
      </HistoryNavigation>
      <SimpleUserPanel
        userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
        userName={user_data.Data?.DisplayName}
        notificationsCount={notifications_count}
        mailCount={mail_count}
      />
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