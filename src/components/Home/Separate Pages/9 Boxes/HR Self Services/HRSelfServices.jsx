import React, { useContext, useState } from 'react'
import './HRSelfServices.css';

import { ReactComponent as HRSelfServicesIcon } from '../../../../../icons/HR Self Services/HR Self Services.svg';

import { ReactComponent as BusinessTrip } from '../../../../../icons/HR Self Services/Business Trip.svg';
import { ReactComponent as BusinessTripCompletion } from '../../../../../icons/HR Self Services/Business Trip Completion.svg';
import { ReactComponent as TrainingRequest } from '../../../../../icons/HR Self Services/Training Request.svg';
import { ReactComponent as LeaveRequest } from '../../../../../icons/HR Self Services/Leave Request.svg';
import { ReactComponent as OverTimeRequest } from '../../../../../icons/HR Self Services/OverTime Request.svg';
import { ReactComponent as SalaryInAdvance } from '../../../../../icons/HR Self Services/Salary In Advance.svg';
import { ReactComponent as HousingAdvance } from '../../../../../icons/HR Self Services/Housing Advance.svg';
import { ReactComponent as VacationAllowance } from '../../../../../icons/HR Self Services/Vacation Allowance.svg';
import { ReactComponent as HRLetter } from '../../../../../icons/HR Self Services/HR Letter.svg';
import { ReactComponent as ViewPayslip } from '../../../../../icons/HR Self Services/View Payslip.svg';
import { ReactComponent as GymReimbursement } from '../../../../../icons/HR Self Services/Gym Reimbursement.svg';
import { ReactComponent as RecruitmentRequst } from '../../../../../icons/HR Self Services/Recruitment Requst.svg';
import { ReactComponent as DaycareAllowance } from '../../../../../icons/HR Self Services/Daycare Allowance.svg';
import { ReactComponent as ResignationRequest } from '../../../../../icons/HR Self Services/Resignation Request.svg';
import { ReactComponent as ProbationPeriodEvaluation } from '../../../../../icons/HR Self Services/Probation Period Evaluation.svg';
import { ReactComponent as ProfessionalCertificate } from '../../../../../icons/HR Self Services/Professional Certificate Reimbursement.svg';
import { ReactComponent as BusinessCard } from '../../../../../icons/HR Self Services/Business Card.svg';
import { ReactComponent as RelocationAllowance } from '../../../../../icons/HR Self Services/Relocation Allowance.svg';

import { ReactComponent as HRNotificationsCenter } from '../../../../../icons/HR Self Services/HR Notifications Center.svg';
import { ReactComponent as ERPNotificationsCenter } from '../../../../../icons/HR Self Services/ERP Notifications Center.svg';

import WorldBG from '../../../../../icons/home/world.svg';
import SimpleUserPanel from '../../../../global/Simple User Panel/SimpleUserPanel';
import { UserContext } from '../../../../../Context/userContext';
import HistoryNavigation from '../../History Navigation/HistoryNavigation';



const services = [
  {bgColor: '#43A2CC',icon: <BusinessTrip />, dataApplicationName: 'BUSINESS_TRIP', text: 'Business Trip', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/faces/FuseOverview?fndGlobalItemNodeId=EXT_EXTN1521037485862_MENU_1521720725439'},
  {bgColor: '#70CFAF',icon: <BusinessTripCompletion />, dataApplicationName: 'BUSINESS_TRIP_COMPLETION', text: 'Business Trip Completion', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1580212664537%26_afrLoop%3D6966786774092085%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_31%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#9BC9ED',icon: <TrainingRequest />, dataApplicationName: 'TRAINING', text: 'Training Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1580212664537%26_afrLoop%3D6966786774092085%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_31%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#FBBE82',icon: <LeaveRequest />, text: 'Leave Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/faces/deeplink?objType=ADD_ABSENCE&action=NONE'},
  {bgColor: '#70CFAF',icon: <OverTimeRequest />, dataApplicationName: 'OVERTIME', text: 'OverTime Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521037486455%26_afrLoop%3D6967171172184244%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_46%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#F7937B',icon: <SalaryInAdvance />, dataApplicationName: 'SALARY', text: 'Salary In Advance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521747065911%26_afrLoop%3D6967219635184708%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_51%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#FD96A6',icon: <HousingAdvance />, dataApplicationName: 'HOUSING_ADVANCE', text: 'Housing Advance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521721611230%26_afrLoop%3D6967244510488569%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_56%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#9BC9ED',icon: <VacationAllowance />, dataApplicationName: 'VACATION_ALLOWANCE', text: 'Vacation Allowance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521747358525%26_afrLoop%3D6967263544558644%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_61%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#9BC9ED',icon: <HRLetter />, dataApplicationName: 'HR_LETTER', text: 'HR Letter', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521721761601%26_afrLoop%3D6967286564543510%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_66%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#70CFAF',icon: <ViewPayslip />, text: 'View Payslip', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521721611230%26_afrLoop%3D6975115695425481%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_41%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#FBBE82',icon: <GymReimbursement />, dataApplicationName: 'GYM', text: 'Gym Reimbursement', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1585574179603%26_afrLoop%3D6967382557062792%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_71%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#43A2CC',icon: <RecruitmentRequst />, text: 'Recruitment Requst', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1587224172941%26_afrLoop%3D6967411839331891%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_76%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#F7937B',icon: <DaycareAllowance />, dataApplicationName: 'CHILDCARE', text: 'Daycare Allowance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1599107940767%26_afrLoop%3D6967437076757057%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_81%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#EBD944',icon: <ResignationRequest />, dataApplicationName: 'RESIG', text: 'Resignation Request', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1603363085618%26_afrLoop%3D6967448376444849%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_86%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#70CFAF',icon: <ProbationPeriodEvaluation />, dataApplicationName: 'PROPERIOD', text: 'Probation Period Evaluation', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1632010071862%26_afrLoop%3D6975063035200410%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_36%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#FBBE82',icon: <BusinessCard />, dataApplicationName: 'BUSINESSCARD', text: 'Business Card', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1632010010069%26_afrLoop%3D6974997453147146%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_16%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#43A2CC',icon: <ProfessionalCertificate />, dataApplicationName: 'PRC_URL', text: 'Professional Certificate Reimbursement', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1653797991863%26_afrLoop%3D6975021565995446%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_31%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
  {bgColor: '#EBD944',icon: <RelocationAllowance />, dataApplicationName: 'RELOCATION_ALLOW', text: 'Relocation Allowance', href: 'https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1632010121236%26_afrLoop%3D6974963432468615%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3Dwuh9vcs5z_11%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'},
];



function HRSelfServices() {

  const { user_data, notifications_count, mail_count } = useContext(UserContext);

  let checkMobile = (desktopLink, dataApplicationName) => {
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
      if(dataApplicationName === undefined) {
        return desktopLink
      } else {
        return `https://salicapi.com/api/user/generate_identifier/${btoa(user_data.PIN)}?ApplicationName=${dataApplicationName}`
      }
    } else {
      return desktopLink
    }
  }

  return (
    <>
      <HistoryNavigation>
        <p>HR Self Services</p>
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
          <div style={{backgroundColor: '#0A89C1'}}>
            <HRSelfServicesIcon />
          </div>
          <h2>HR Self Services</h2>
        </div>

        <div className='services-body-container'>
          
          <div className="services-boxs-container">
            {services.map((service, i) => {
              return ( 
                <a 
                  data-application-name={service.dataApplicationName}
                  target='_blank' 
                  className='box' 
                  key={i}
                  href={checkMobile(service.href, service.dataApplicationName)} 
                >
                  <div style={{backgroundColor: service.bgColor}}>
                    {service.icon}
                  </div>
                  <h3>{service.text}</h3>
                </a>
              )
            })}
          </div>


          <h4 className='services-second-header'>Notifications Center</h4>
          <div className="services-boxs-container">
            <a className='box' target='_blank' href='https://hen.fa.em2.oraclecloud.com/fscmUI/adfAuthentication?level=FORM&success_url=%2FfscmUI%2Ffaces%2FFuseOverview%3FfndGlobalItemNodeId%3DEXT_EXTN1521037485862_MENU_1521747517899%26_afrLoop%3D6967469320367673%26_afrWindowMode%3D0%26_afrWindowId%3Dnull%26_adf.ctrl-state%3D12y9kgbe6t_91%26_afrFS%3D16%26_afrMT%3Dscreen%26_afrMFW%3D1366%26_afrMFH%3D617%26_afrMFDW%3D1366%26_afrMFDH%3D768%26_afrMFC%3D8%26_afrMFCI%3D0%26_afrMFM%3D0%26_afrMFR%3D96%26_afrMFG%3D0%26_afrMFS%3D0%26_afrMFO%3D0%26_adf.no-new-window-redirect%3Dtrue'>
              <div style={{backgroundColor: '#FBBE82'}}>
                <HRNotificationsCenter />
              </div>
              <h3>HR Notifications Center</h3>
            </a>
            <a className='box' target='_blank' href='https://hen.fa.em2.oraclecloud.com/fscmUI/faces/AtkHomePageWelcome'>
              <div style={{backgroundColor: '#FD96A6'}}>
                <ERPNotificationsCenter />
              </div>
              <h3>ERP Notifications Center</h3>
            </a>
          </div>


        </div>
      </div>
    </>
  )
}

export default HRSelfServices