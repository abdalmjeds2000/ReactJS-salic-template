import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SimpleUserPanel.css';

import { ReactComponent as NotificationIcon } from '../../../icons/separated pages/Notification-Icon.svg'
import { ReactComponent as MessageIcon } from '../../../icons/separated pages/Message-Icon.svg'
import UserSettingsPanel from '../User Settings Panel/UserSettingsPanel';

function SimpleUserPanel(props) {
  const [showUserDetails, setShowUserDetails] = useState(false);

  return (
    <>
      <div className='simple-user-panel'>
        <img 
          src={props.userImage} 
          alt="" 
          onClick={() => setShowUserDetails(!showUserDetails)} 
        />
        <p>{props.userName}</p>
        <div className='icons'>
          <NavLink to="/sites/newsalic/SitePages/Dev/dev.aspx/notification-center">
            <NotificationIcon />
            {
              props.notificationsCount > 0 && 
              <span className="badge notifi-count">
                {props.notificationsCount > 9 ? '9+' : props.notificationsCount}
              </span>}
          </NavLink>
          <a href="https://outlook.office.com/owa/" target="blank">
            <MessageIcon />
            {
              props.mailCount > 0 && 
              <span className="badge mail-count">
                {props.mailCount > 9 ? '9+' : props.mailCount}
              </span>
            }
          </a>
        </div>

        
        {
          showUserDetails
          ? <UserSettingsPanel
              userName={props.userName}
              userImage={props.userImage}
              onClickClose={() => setShowUserDetails(!showUserDetails)}
            />
          : null
        }
      </div>

      
    </>
  )
}

export default SimpleUserPanel