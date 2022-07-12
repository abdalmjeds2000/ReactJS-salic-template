import React, { useState } from 'react'
import './AdminServices.css';
import AdminServicesIcon from '../../../../icons/home/sevices/Admin Services.svg';

import WorldBG from '../../../../icons/home/world.svg';

function AdminServices() {


  const [services, setServices] = useState([
    {icon: AdminServicesIcon, text: 'Issue VISA Reequest'},
    {icon: AdminServicesIcon, text: 'Business Gate Entry'},
    {icon: AdminServicesIcon, text: 'Shipment Request'},
    {icon: AdminServicesIcon, text: 'Office Supply Request'},
    {icon: AdminServicesIcon, text: 'Maintenance'},
    {icon: AdminServicesIcon, text: 'Visitor VISA'},
    {icon: AdminServicesIcon, text: 'Purchase Requisition'},
    {icon: AdminServicesIcon, text: 'Receive Order Items'},
    {icon: AdminServicesIcon, text: 'Receipt Confitmation'},
    {icon: AdminServicesIcon, text: 'Transportation Request'},
  ]);


  return (
    <div className='services-page-container'>
      <div className="header">
        <img src={AdminServicesIcon} alt="Attendance Icon" />
        <h2>Admin Service Request</h2>
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
            <img src={AdminServicesIcon} alt='icon box' />
            <h3>My Requests</h3>
          </div>
          <div className='box'>
            <img src={AdminServicesIcon} alt='icon box' />
            <h3>Assigned Requests</h3>
          </div>
        </div>
        <img src={WorldBG} className='img-bg' alt="world background" />

      </div>
    </div>
  )
}

export default AdminServices