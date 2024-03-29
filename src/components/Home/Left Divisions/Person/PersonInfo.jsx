import React, {useContext} from "react";
import { NavLink } from 'react-router-dom';

import './PersonInfo.css';
import { UserContext } from '../../../../Context/userContext'

import PersonImg from '../../../../icons/home/person.png'
import { ReactComponent as CallIcon } from '../../../../icons/home/Iconly-Bold-Calling.svg';
import { ReactComponent as TelIcon } from '../../../../icons/home/Iconly-Tel.svg';
import { ReactComponent as StarIcon } from '../../../../icons/home/Iconly-Bold-Star.svg';

import { ReactComponent as MessageIcon } from '../../../../icons/notification-list/Iconly-Bold-Message.svg';
import { ReactComponent as NotificationIcon } from '../../../../icons/notification-list/Iconly-Bold-Notification.svg';
import { ReactComponent as DocumentIcon } from '../../../../icons/notification-list/Iconly-Bold-Document.svg';
import { ReactComponent as CallingIcon } from '../../../../icons/notification-list/Iconly-Bold-Calling.svg';


const PersonInfo = (props) => {

  const { user_data, notifications_count, mail_count } = useContext(UserContext);

  
  return <div className="person">
    <div className="person-info">
      <div className="person-img">
        <img 
          src={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`} 
          alt="" 
        />
      </div>
      <div className="person-txt">
        <h1>{user_data.Data?.DisplayName}</h1>
        <p>{user_data.Data?.Title}</p>
        <div>
          <div><CallIcon/> <p>{user_data.Data?.Mobile}</p></div>
          <div><TelIcon/> <p>{user_data.Data?.Ext}</p></div>
          <div><StarIcon/> <p>{user_data.Data?.OfficeLocation}</p></div>
        </div>
      </div>
    </div>
    <div className="person-control-buttons person-btns">
      
      <a href="https://outlook.office.com/owa/" target='blank'>
        <MessageIcon />
        {
          mail_count > 0 && 
          <span className="badge mail-count">
            {mail_count > 99 ? '99+' : mail_count}
          </span> }
      </a>
      
      <NavLink to="/sites/newsalic/SitePages/Dev/dev.aspx/notification-center">
        <NotificationIcon />
        { 
          notifications_count > 0 && 
          <span className="badge notifi-count">
            {notifications_count > 99 ? "99+" : notifications_count}
          </span> 
        }
      </NavLink>

      {/* <a href="">
        <DocumentIcon />
      </a> */}
      
      <a href={`tel:${user_data.Data?.Mobile}`}>
        <CallingIcon />
      </a>

    </div>
  </div>
}

export default PersonInfo