import React, { useState } from 'react'
import './ITServices.css';


import ITServicesIcon from '../../../../icons/home/sevices/IT Services.svg';
import WorldBG from '../../../../icons/home/world.svg';



function ITServices() {

  const [services, setServices] = useState([
    {icon: ITServicesIcon, text: 'New IT Service Request'},
  ]);


  return (
    <div className='services-page-container'>
      <div className="header">
        <img src={ITServicesIcon} alt="Attendance Icon" />
        <h2>IT Services Requests</h2>
      </div>


      <div className='services-body-container'>
        

        <div className="services-boxs-container">
          {services.map((service, i) => {
            return <div className='box' key={i}>
              <img src={service.icon} alt={service.text} />
              <h3>{service.text}</h3>
            </div>
          })}
        </div>


        <h4 className='services-second-header'>Request Center</h4>
        <div className="services-boxs-container">
          <div className='box'>
            <img src={ITServicesIcon} alt='icon box' />
            <h3>My Requests</h3>
          </div>
          <div className='box'>
            <img src={ITServicesIcon} alt='icon box' />
            <h3>Requests Assigned</h3>
          </div>
          <div className='box'>
            <img src={ITServicesIcon} alt='icon box' />
            <h3>IT Service Requests</h3>
          </div>
        </div>
        <img src={WorldBG} className='img-bg' alt="world background" />

      </div>
    </div>
  )
}

export default ITServices