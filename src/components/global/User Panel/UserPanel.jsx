import React from 'react'
import './UserPanel.css';
import { NavLink } from 'react-router-dom'

import MessageIcon from '../../../icons/notification-list/Iconly-Bold-Message.svg';
import NotificationIcon from '../../../icons/notification-list/Iconly-Bold-Notification.svg';
import DocumentIcon from '../../../icons/notification-list/Iconly-Bold-Document.svg';
import CallingIcon from '../../../icons/notification-list/Iconly-Bold-Calling.svg';
import { useState } from 'react';

import UserSettingsPanel from '../User Settings Panel/UserSettingsPanel';


function UserPanel(props) {

  const [showUserDetails, setShowUserDetails] = useState(false);



  return (
    <div className='user-panel-container'>
      <div className='icons'>
        
        {/* <a href="/">
          <img src={DocumentIcon} alt="Document Icon" />
        </a> */}
        
        
        <a href={`tel:${props.mobile}`}>
          <img src={CallingIcon} alt="Calling Icon" />
        </a>
        
        <a href={props.mailTo} target='blank'>
          <img src={MessageIcon} alt="Message Icon" />
          { 
            props.mailCount > 0 && <span className="badge mail-count" style={{top: '-10px'}}>
              {props.mailCount}
            </span> 
          }
        </a>
        
        <NavLink to="/notification-center">
          <img src={NotificationIcon} alt="Notification Icon" />
          { 
            props.notificationsCount > 0 && <span className="badge notifi-count" style={{top: '-10px'}}>
              {props.notificationsCount}
            </span> 
          }
        </NavLink>
        
      </div>
      
      <div className='user-info'>
        <h2>{props.userName}</h2>
        <img 
          src={props.userImage} 
          alt="" 
          onClick={_ => setShowUserDetails(!showUserDetails)} 
        />
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
  )
}

export default UserPanel