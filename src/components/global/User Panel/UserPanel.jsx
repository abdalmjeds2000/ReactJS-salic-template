import React from 'react'
import './UserPanel.css';


import MessageIcon from '../../../icons/notification-list/Iconly-Bold-Message.svg';
import NotificationIcon from '../../../icons/notification-list/Iconly-Bold-Notification.svg';
import DocumentIcon from '../../../icons/notification-list/Iconly-Bold-Document.svg';
import CallingIcon from '../../../icons/notification-list/Iconly-Bold-Calling.svg';
import PersonImg from '../../../icons/home/person.png';
import { useState } from 'react';

import logo from '../../../icons/icons-menu/logo.jpg';


function UserPanel() {

  const [showUserDetails, setShowUserDetails] = useState(false);

  return (
    <div className='user-panel-container'>
      <div className='icons'>
        <img src={MessageIcon} alt="Message Icon" />
        <img src={NotificationIcon} alt="Notification Icon" />
        <img src={DocumentIcon} alt="Document Icon" />
        <img src={CallingIcon} alt="Calling Icon" />
      </div>
      <div className='user-info'>
        <h2>AbdAlmjed Skaik</h2>
        <img src={PersonImg} alt="Person" onClick={() => setShowUserDetails(!showUserDetails)} />
      </div>
      {
        showUserDetails
        ? <div className='user-details'>
            <div className='header'>
              <img src={logo} alt="logo" />
              <a href="/">Sign Out</a>
            </div>
            <div className='details'>
              <img src={PersonImg} alt="Person" />
              <div>
                <h2>Mohammad Al-Ahmad</h2>
                <a href="/">Microsoft Account</a>
                <a href="/">Site Setting</a>
                <a href="/">Change Password</a>
              </div>
            </div>
            <div className='gradient-bg-ud' onClick={() => setShowUserDetails(!showUserDetails)} ></div>
          </div>
        : null
      }
    </div>
  )
}

export default UserPanel