import React, { useState } from 'react'
import './ITServices.css';


import { ReactComponent as ITServicesIcon } from '../../../../../icons/home/sevices/IT Services.svg';

import { ReactComponent as NewITServiceRequest } from '../../../../../icons/IT Services Requests/New IT Service Request.svg';
import { ReactComponent as MyRequests } from '../../../../../icons/IT Services Requests/My Requests.svg';
import { ReactComponent as RequestsAssigned } from '../../../../../icons/IT Services Requests/Requests Assigned.svg';
import { ReactComponent as ITServiceRequests } from '../../../../../icons/IT Services Requests/IT Service Requests.svg';


import WorldBG from '../../../../../icons/home/world.svg';
import { NavLink } from 'react-router-dom';



function ITServices() {

  const [services, setServices] = useState([
    {to: '/it-services/services-request', bgColor: '#70CFAF', icon: <NewITServiceRequest />, text: 'New IT Service Request'},
    {to: '/it-services/new-asset', bgColor: '#897ED4', icon: <NewITServiceRequest />, text: 'Register New Asset'},
  ]);


  return (
    <div className='services-page-container'>
      <img src={WorldBG} className='img-bg' alt="world background" />
      
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
  )
}

export default ITServices