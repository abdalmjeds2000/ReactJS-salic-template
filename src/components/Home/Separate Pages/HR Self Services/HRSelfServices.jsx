import React, { useState } from 'react'
import './HRSelfServices.css';

import HRSelfServicesIcon from '../../../../icons/home/sevices/HR Self Services.svg';

import BusinessTrip from '../../../../icons/HR Self Services/Business Trip.svg';
import BusinessTripCompletion from '../../../../icons/HR Self Services/Business Trip Completion.svg';
import TrainingRequest from '../../../../icons/HR Self Services/Training Request.svg';
import LeaveRequest from '../../../../icons/HR Self Services/Leave Request.svg';
import OverTimeRequest from '../../../../icons/HR Self Services/OverTime Request.svg';
import SalaryInAdvance from '../../../../icons/HR Self Services/Salary In Advance.svg';
import HousingAdvance from '../../../../icons/HR Self Services/Housing Advance.svg';
import VacationAllowance from '../../../../icons/HR Self Services/Vacation Allowance.svg';
import HRLetter from '../../../../icons/HR Self Services/HR Letter.svg';
import ViewPayslip from '../../../../icons/HR Self Services/View Payslip.svg';
import GymReimbursement from '../../../../icons/HR Self Services/Gym Reimbursement.svg';
import RecruitmentRequst from '../../../../icons/HR Self Services/Recruitment Requst.svg';
import DaycareAllowance from '../../../../icons/HR Self Services/Daycare Allowance.svg';
import ResignationRequest from '../../../../icons/HR Self Services/Resignation Request.svg';


import HRNotificationsCenter from '../../../../icons/HR Self Services/HR Notifications Center.svg';
import ERPNotificationsCenter from '../../../../icons/HR Self Services/ERP Notifications Center.svg';


import WorldBG from '../../../../icons/home/world.svg';


function HRSelfServices() {

  const [services, setServices] = useState([
    {icon: BusinessTrip, text: 'Business Trip'},
    {icon: BusinessTripCompletion, text: 'Training Request'},
    {icon: TrainingRequest, text: 'Leave Request'},
    {icon: LeaveRequest, text: 'OverTime Request'},
    {icon: OverTimeRequest, text: 'Salary In Advance'},
    {icon: SalaryInAdvance, text: 'Housing Advance'},
    {icon: HousingAdvance, text: 'Vacation Allowance'},
    {icon: VacationAllowance, text: 'HR Letter'},
    {icon: HRLetter, text: 'View Payslip'},
    {icon: ViewPayslip, text: 'Gym Reimbursement'},
    {icon: GymReimbursement, text: 'Recruitment Requst'},
    {icon: RecruitmentRequst, text: 'Daycare Allowance'},
    {icon: DaycareAllowance, text: 'Resignation Request'},
    {icon: ResignationRequest, text: 'Resignation Request'},
  ]);


  return (
    <div className='services-page-container'>
      <div className="header">
        <img src={HRSelfServicesIcon} alt="Attendance Icon" />
        <h2>HR Self Services</h2>
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
            <img src={HRNotificationsCenter} alt='icon box' />
            <h3>HR Notifications Center</h3>
          </div>
          <div className='box'>
            <img src={ERPNotificationsCenter} alt='icon box' />
            <h3>ERP Notifications Center</h3>
          </div>
        </div>
        <img src={WorldBG} className='img-bg' alt="world background" />

      </div>
    </div>
  )
}

export default HRSelfServices