import React, { useContext, useState } from 'react'
import './HRSelfServices.css';

import HRSelfServicesIcon from '../../../../../icons/home/sevices/HR Self Services.svg';

import BusinessTrip from '../../../../../icons/HR Self Services/Business Trip.svg';
import BusinessTripCompletion from '../../../../../icons/HR Self Services/Business Trip Completion.svg';
import TrainingRequest from '../../../../../icons/HR Self Services/Training Request.svg';
import LeaveRequest from '../../../../../icons/HR Self Services/Leave Request.svg';
import OverTimeRequest from '../../../../../icons/HR Self Services/OverTime Request.svg';
import SalaryInAdvance from '../../../../../icons/HR Self Services/Salary In Advance.svg';
import HousingAdvance from '../../../../../icons/HR Self Services/Housing Advance.svg';
import VacationAllowance from '../../../../../icons/HR Self Services/Vacation Allowance.svg';
import HRLetter from '../../../../../icons/HR Self Services/HR Letter.svg';
import ViewPayslip from '../../../../../icons/HR Self Services/View Payslip.svg';
import GymReimbursement from '../../../../../icons/HR Self Services/Gym Reimbursement.svg';
import RecruitmentRequst from '../../../../../icons/HR Self Services/Recruitment Requst.svg';
import DaycareAllowance from '../../../../../icons/HR Self Services/Daycare Allowance.svg';
import ResignationRequest from '../../../../../icons/HR Self Services/Resignation Request.svg';
import ProbationPeriodEvaluation from '../../../../../icons/HR Self Services/Probation Period Evaluation.svg';
import ProfessionalCertificate from '../../../../../icons/HR Self Services/Professional Certificate Reimbursement.svg';
import BusinessCard from '../../../../../icons/HR Self Services/Business Card.svg';
import RelocationAllowance from '../../../../../icons/HR Self Services/Relocation Allowance.svg';


import HRNotificationsCenter from '../../../../../icons/HR Self Services/HR Notifications Center.svg';
import ERPNotificationsCenter from '../../../../../icons/HR Self Services/ERP Notifications Center.svg';


import WorldBG from '../../../../../icons/home/world.svg';
import SimpleUserPanel from '../../../../global/Simple User Panel/SimpleUserPanel';
import { UserContext } from '../../../../../Context/userContext';



const services = [
  {icon: BusinessTrip, text: 'Business Trip', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/faces/FuseOverview?fndGlobalItemNodeId=EXT_EXTN1521037485862_MENU_1521720725439'},
  {icon: BusinessTripCompletion, text: 'Business Trip Completion', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1580212664537%26_afrLoop%3D6966786774092085%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_31%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: TrainingRequest, text: 'Training Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1580212664537%26_afrLoop%3D6966786774092085%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_31%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: LeaveRequest, text: 'Leave Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/faces/deeplink?objType=ADD_ABSENCE&action=NONE'},
  {icon: OverTimeRequest, text: 'OverTime Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521037486455%26_afrLoop%3D6967171172184244%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_46%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: SalaryInAdvance, text: 'Salary In Advance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521747065911%26_afrLoop%3D6967219635184708%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_51%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: HousingAdvance, text: 'Housing Advance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521721611230%26_afrLoop%3D6967244510488569%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_56%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: VacationAllowance, text: 'Vacation Allowance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521747358525%26_afrLoop%3D6967263544558644%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_61%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: HRLetter, text: 'HR Letter', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521721761601%26_afrLoop%3D6967286564543510%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_66%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: ViewPayslip, text: 'View Payslip', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521721611230%26_afrLoop%3D6975115695425481%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_41%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: GymReimbursement, text: 'Gym Reimbursement', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1585574179603%26_afrLoop%3D6967382557062792%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_71%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: RecruitmentRequst, text: 'Recruitment Requst', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1587224172941%26_afrLoop%3D6967411839331891%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_76%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: DaycareAllowance, text: 'Daycare Allowance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1599107940767%26_afrLoop%3D6967437076757057%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_81%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: ResignationRequest, text: 'Resignation Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1603363085618%26_afrLoop%3D6967448376444849%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_86%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: ProbationPeriodEvaluation, text: 'Probation Period Evaluation', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1632010071862%26_afrLoop%3D6975063035200410%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_36%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: BusinessCard, text: 'Business Card', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1632010010069%26_afrLoop%3D6974997453147146%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_16%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: ProfessionalCertificate, text: 'Professional Certificate Reimbursement', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1653797991863%26_afrLoop%3D6975021565995446%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_31%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {icon: RelocationAllowance, text: 'Relocation Allowance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1632010121236%26_afrLoop%3D6974963432468615%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_11%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
];



function HRSelfServices() {

  const { user_data } = useContext(UserContext);
  const { notifications_count } = useContext(UserContext);
  const { mail_count } = useContext(UserContext);

  
  

  return (
    <div className='services-page-container'>

      <SimpleUserPanel
        userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
        userName={user_data.Data.DisplayName}
        notificationsCount={notifications_count}
        mailCount={mail_count}
      />

      <div className="header">
        <img src={HRSelfServicesIcon} alt="Attendance Icon" />
        <h2>HR Self Services</h2>
      </div>


      <div className='services-body-container'>
        

        <div className="services-boxs-container">
          {services.map((service, i) => {
            return <a href={service.href} target='_blank' className='box' key={i}>
              <img src={service.icon} alt={service.text} />
              <h3>{service.text}</h3>
            </a>
          })}
        </div>


        <h4 className='services-second-header'>Notifications Center</h4>
        <div className="services-boxs-container">
          <a className='box' target='_blank' href='https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521747517899%26_afrLoop%3D6967469320367673%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_91%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'>
            <img src={HRNotificationsCenter} alt='icon box' />
            <h3>HR Notifications Center</h3>
          </a>
          <a className='box' target='_blank' href='https://hen.fa.em2.oraclecloud.com/fscmUI/faces/AtkHomePageWelcome'>
            <img src={ERPNotificationsCenter} alt='icon box' />
            <h3>ERP Notifications Center</h3>
          </a>
        </div>


        <img src={WorldBG} className='img-bg' alt="world background" />
      </div>
    </div>
  )
}

export default HRSelfServices