import React, { useState } from 'react'
import './HRSelfServices.css';

import HRSelfServicesIcon from '../../../../icons/home/sevices/HR Self Services.svg';

import WorldBG from '../../../../icons/home/world.svg';


function HRSelfServices() {

  const [services, setServices] = useState([
    {icon: HRSelfServicesIcon, text: 'Business Trip'},
    {icon: HRSelfServicesIcon, text: 'Business Trip Completion'},
    {icon: HRSelfServicesIcon, text: 'Training Request'},
    {icon: HRSelfServicesIcon, text: 'Leave Request'},
    {icon: HRSelfServicesIcon, text: 'OverTime Request'},
    {icon: HRSelfServicesIcon, text: 'Salary In Advance'},
    {icon: HRSelfServicesIcon, text: 'Housing Advance'},
    {icon: HRSelfServicesIcon, text: 'Vacation Allowance'},
    {icon: HRSelfServicesIcon, text: 'HR Letter'},
    {icon: HRSelfServicesIcon, text: 'View Payslip'},
    {icon: HRSelfServicesIcon, text: 'Gym Reimbursement'},
    {icon: HRSelfServicesIcon, text: 'Recruitment Requst'},
    {icon: HRSelfServicesIcon, text: 'Daycare Allowance'},
    {icon: HRSelfServicesIcon, text: 'Resignation Request'},
  ]);


  return (
    <div className='services-page-container'>
      <div className="header">
        <img src={HRSelfServicesIcon} alt="Attendance Icon" />
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


        <h4 className='services-second-header'>Notifications Center</h4>
        <div className="services-boxs-container">
          <div className='box'>
            <img src={HRSelfServicesIcon} alt='icon box' />
            <h3>HR Notifications Center</h3>
          </div>
          <div className='box'>
            <img src={HRSelfServicesIcon} alt='icon box' />
            <h3>ERP Notifications Center</h3>
          </div>
        </div>
        <img src={WorldBG} className='img-bg' alt="world background" />

      </div>
    </div>
  )
}

export default HRSelfServices