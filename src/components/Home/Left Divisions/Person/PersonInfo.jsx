import React from "react";
import './PersonInfo.css';

import PersonImg from '../../../../icons/home/person.png'
import { ReactComponent as CallIcon } from '../../../../icons/home/Iconly-Bold-Calling.svg';
import { ReactComponent as TelIcon } from '../../../../icons/home/Iconly-Tel.svg';
import { ReactComponent as StarIcon } from '../../../../icons/home/Iconly-Bold-Star.svg';

import { ReactComponent as MessageIcon } from '../../../../icons/notification-list/Iconly-Bold-Message.svg';
import { ReactComponent as NotificationIcon } from '../../../../icons/notification-list/Iconly-Bold-Notification.svg';
import { ReactComponent as DocumentIcon } from '../../../../icons/notification-list/Iconly-Bold-Document.svg';
import { ReactComponent as CallingIcon } from '../../../../icons/notification-list/Iconly-Bold-Calling.svg';


const PersonInfo = (props) => {

  return <div className="person">
    <div className="person-info">
      <div className="person-img">
        <img src={PersonImg} alt="Person" />
      </div>
      <div  className="person-txt">
        <h1>Mohammad Al-Ahmad</h1>
        <p>Marketing Manager</p>
        <div>
          <div><CallIcon/> <p>00960 567 67 447</p></div>
          <div><TelIcon/> <p>1102</p></div>
          <div><StarIcon/> <p>A</p></div>
        </div>
      </div>
    </div>
    <div className="person-control-buttons">
      <MessageIcon />
      <NotificationIcon />
      <DocumentIcon />
      <CallingIcon />
    </div>
  </div>
}

export default PersonInfo