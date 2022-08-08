import React, { useState } from 'react';
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
          alt="user face" 
          onClick={() => setShowUserDetails(!showUserDetails)} 
        />
        <p>{props.userName}</p>
        <div>
          <a href="">
            <NotificationIcon />
            {props.notificationsCount > 0 && <span className="badge notifi-count">{props.notificationsCount}</span>}  
          </a>
          <a href="">
            <MessageIcon />
            {props.mailCount > 0 &&  <span className="badge mail-count">{props.mailCount}</span>}
          </a>
        </div>
      </div>

      {/* {
        showUserDetails
        ? <UserSettingsPanel
            userName={props.userName}
            userImage={props.userImage}
            onClickGradient={() => setShowUserDetails(!showUserDetails)}
          />
        : null
      } */}
    </>
  )
}

export default SimpleUserPanel