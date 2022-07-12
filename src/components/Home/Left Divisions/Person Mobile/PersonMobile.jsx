import React from "react";
import './PersonMobile.css';

import PersonImg from '../../../../icons/home/person.png'
import { ReactComponent as CallIcon } from '../../../../icons/home/Iconly-Bold-Calling.svg';
import { ReactComponent as TelIcon } from '../../../../icons/home/Iconly-Tel.svg';
import { ReactComponent as StarIcon } from '../../../../icons/home/Iconly-Bold-Star.svg';

import { ReactComponent as MessageIcon } from '../../../../icons/notification-list/Iconly-Bold-Message.svg';
import { ReactComponent as NotificationIcon } from '../../../../icons/notification-list/Iconly-Bold-Notification.svg';
import { ReactComponent as DocumentIcon } from '../../../../icons/notification-list/Iconly-Bold-Document.svg';
import { ReactComponent as CallingIcon } from '../../../../icons/notification-list/Iconly-Bold-Calling.svg';




const PersonMobile = (props) => {

  return <div className="person person-mobile">
    <div className="person-info person-info-mobile">
      <div className="person-control-buttons">
        <DocumentIcon />
        <MessageIcon />
        <div className="person-img">
          <img src={PersonImg} alt="Person" />
        </div>
        <NotificationIcon />
        <CallingIcon />
      </div>
      <div className="person-txt person-txt-mobile">
        <h1>Mohammad Al-Ahmad</h1>
        <p>Marketing Manager</p>
      </div>
    </div>
    
  </div>
}

export default PersonMobile