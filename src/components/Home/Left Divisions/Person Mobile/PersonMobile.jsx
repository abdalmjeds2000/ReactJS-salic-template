import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';

import './PersonMobile.css';

import PersonImg from '../../../../icons/home/person.png'
import { ReactComponent as CallIcon } from '../../../../icons/home/Iconly-Bold-Calling.svg';
import { ReactComponent as TelIcon } from '../../../../icons/home/Iconly-Tel.svg';
import { ReactComponent as StarIcon } from '../../../../icons/home/Iconly-Bold-Star.svg';

import { ReactComponent as MessageIcon } from '../../../../icons/notification-list/Iconly-Bold-Message.svg';
import { ReactComponent as NotificationIcon } from '../../../../icons/notification-list/Iconly-Bold-Notification.svg';
import { ReactComponent as DocumentIcon } from '../../../../icons/notification-list/Iconly-Bold-Document.svg';
import { ReactComponent as CallingIcon } from '../../../../icons/notification-list/Iconly-Bold-Calling.svg';
import { UserContext } from "../../../../Context/userContext";




const PersonMobile = (props) => {

  const { user_data, notifications_count, mail_count } = useContext(UserContext);


  return <div className="person person-mobile" id="person-mobile">
    <div className="person-info person-info-mobile">
      <div className="person-control-buttons">
        
        <a href="/" target="blank">
          <DocumentIcon />
        </a>
        
        <a href="https://outlook.office.com/owa/" target='blank'>
          <MessageIcon />
          { mail_count > 0 && <span className="badge mail-count">
              {mail_count}
            </span> }
        </a>
        
        <div className="person-img">
          <img src={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`} alt="Person" />
        </div>

        <NavLink to="/notification-center">
          <NotificationIcon />
          { notifications_count > 0 && <span className="badge notifi-count">{notifications_count}</span> }
        </NavLink>

        <a href={`tel:${user_data.Data?.Mobile}`}>
          <CallingIcon />
        </a>
        
      </div>
      <div className="person-txt person-txt-mobile">
        <h1>{user_data.Data?.DisplayName}</h1>
        <p>{user_data.Data?.Title}</p>
      </div>
    </div>
    
  </div>
}

export default PersonMobile