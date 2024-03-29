import React, { useContext, useState } from 'react'
import './ITServices.css';


import { ReactComponent as ITServicesIcon } from '../../../../../icons/IT Services Requests/IT Services.svg';

import { ReactComponent as NewITServiceRequest } from '../../../../../icons/IT Services Requests/New IT Service Request.svg';
import { ReactComponent as MyRequests } from '../../../../../icons/IT Services Requests/My Requests.svg';
import { ReactComponent as RequestsAssigned } from '../../../../../icons/IT Services Requests/Requests Assigned.svg';
import { ReactComponent as ITServiceRequests } from '../../../../../icons/IT Services Requests/IT Service Requests.svg';


import WorldBG from '../../../../../icons/home/world.svg';
import { NavLink } from 'react-router-dom';
import HistoryNavigation from '../../History Navigation/HistoryNavigation';
import SimpleUserPanel from '../../../../global/Simple User Panel/SimpleUserPanel';
import { UserContext } from '../../../../../Context/userContext';



function ITServices() {
  const { user_data, notifications_count, mail_count } = useContext(UserContext);

  const services = [
    {to: '/sites/newsalic/SitePages/Dev/dev.aspx/it-services/services-request', bgColor: '#70CFAF', icon: <NewITServiceRequest />, text: 'New IT Service Request'},
    {to: '/sites/newsalic/SitePages/Dev/dev.aspx/it-services/new-asset', bgColor: '#897ED4', icon: <NewITServiceRequest />, text: 'Register New Asset'},
  ];

  return (
    <>
      <HistoryNavigation>
        <p>IT Service Center</p>
      </HistoryNavigation>
      <div className='services-page-container'>
        <img src={WorldBG} className='img-bg' alt="world background" />
        <SimpleUserPanel
          userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
          userName={user_data.Data?.DisplayName}
          notificationsCount={notifications_count}
          mailCount={mail_count}
        />

        <div className="header">
          <div style={{backgroundColor: '#897ED4'}}>
            <ITServicesIcon />
          </div>
          <h2>IT Services Requests</h2>
        </div>


        <div className='services-body-container'>

          <div className="services-boxs-container">
            {services.map((service, i) => {
              return (
                <NavLink 
                  key={i}
                  to={service.to} 
                  className='box' 
                >
                  <div style={{backgroundColor: service.bgColor}}>
                    {service.icon}
                  </div>
                  <h3>{service.text}</h3>
                </NavLink>
              ) 
            })}
          </div>


          <h4 className='services-second-header'>Request Center</h4>
          <div className="services-boxs-container">
            <a className='box' href='/'>
              <div style={{backgroundColor: '#43A2CC'}}>
                <MyRequests />
              </div>
              <h3>My Requests</h3>
            </a>
            <a className='box' href='/'>
              <div style={{backgroundColor: '#FBBE82'}}>
                <RequestsAssigned />
              </div>
              <h3>Requests Assigned</h3>
            </a>
            <a className='box'>
              <div style={{backgroundColor: '#FD96A6'}}>
                <ITServiceRequests />
              </div>
              <h3>IT Service Requests</h3>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default ITServices