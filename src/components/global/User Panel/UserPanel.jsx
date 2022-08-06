import React, { useContext } from 'react'
import './UserPanel.css';

import MessageIcon from '../../../icons/notification-list/Iconly-Bold-Message.svg';
import NotificationIcon from '../../../icons/notification-list/Iconly-Bold-Notification.svg';
import DocumentIcon from '../../../icons/notification-list/Iconly-Bold-Document.svg';
import CallingIcon from '../../../icons/notification-list/Iconly-Bold-Calling.svg';
import PersonImg from '../../../icons/home/person.png';
import { useState } from 'react';

import logo from '../../../icons/icons-menu/logo.jpg';
import { UserContext } from '../../../Context/userContext';


function UserPanel() {

  const [showUserDetails, setShowUserDetails] = useState(false);

  const { user_data } = useContext(UserContext);
  const { notifications_count } = useContext(UserContext);
  const { mail_count } = useContext(UserContext);



  return (
    <div className='user-panel-container'>
      <div className='icons'>
        <a href="https://outlook.office.com/owa/" target='_blank'>
          <img src={MessageIcon} alt="Message Icon" />
          {
            mail_count > 0 
            ? <span className="badge mail-count" style={{top: '-10px'}}>
                {mail_count}
              </span>
            : ''
          }
        </a>
        <a href="https://outlook.office.com/owa/" target='_blank'>
          <img src={NotificationIcon} alt="Notification Icon" />
          {
            notifications_count > 0 
            ? <span className="badge notifi-count" style={{top: '-10px'}}>
                {notifications_count}
              </span> 
            : ''  
          }
        </a>
        <a href="">
          <img src={DocumentIcon} alt="Document Icon" />
        </a>
        <a href={`tel:${user_data.Data?.Mobile}`}>
          <img src={CallingIcon} alt="Calling Icon" />
        </a>
      </div>
      <div className='user-info'>
        <h2>{user_data.Data?.DisplayName}</h2>
        <img 
          src={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`} 
          alt="Person" 
          onClick={() => setShowUserDetails(!showUserDetails)} 
        />
      </div>
      {
        showUserDetails
        ? <div className='user-details'>
            <div className='header'>
              <img src={logo} alt="logo" />
              <a href="https://salic.sharepoint.com/sites/newsalic/_layouts/closeConnection.aspx?loginasanotheruser=true&Source=https://salic.sharepoint.com/sites/dev">Sign Out</a>
            </div>
            <div className='details'>
              <img 
                src={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`} 
                alt="Person" 
              />
              <div>
                <h2>{user_data.Data?.DisplayName}</h2>
                <a target='_blank' href="https://myaccount.microsoft.com/?ref=MeControl&login_hint=Akmal.Eldahdouh%40salic.com&tid=bea1b417-4237-40b8-b020-57fce9abdb43">Microsoft Account</a>
                <a target='_blank' href="https://salic.sharepoint.com/sites/dev/_layouts/15/settings.aspx">Site Setting</a>
                <a target='_blank' href="https://account.activedirectory.windowsazure.com/ChangePassword.aspx">Change Password</a>
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