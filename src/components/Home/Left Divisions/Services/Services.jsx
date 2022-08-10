// import React, { useState } from "react";
// import './Services.css';

// import AdminServices from '../../../../icons/home/sevices/Admin Services.svg';
// import ITServices from '../../../../icons/home/sevices/IT Services.svg';
// import OracleReports from '../../../../icons/home/sevices/Oracle Reports.svg';
// import HRSelfServices from '../../../../icons/home/sevices/HR Self Services.svg';
// import IncidentsCenter from '../../../../icons/home/sevices/Incidents Center.svg';
// import CorrespondingSystem from '../../../../icons/home/sevices/Corresponding System.svg';
// import ResearchCenter from '../../../../icons/home/sevices/Research Center.svg';
// import ESignatureTool from '../../../../icons/home/sevices/E Signature Tool.svg';
// import DMS from '../../../../icons/home/sevices/DMS.svg';
// import { NavLink } from "react-router-dom";


// const Services = () => {


//   const [services, setServices] = useState([
//     {id: 0, iconColor: '#49C688',img: AdminServices, header: 'Admin Services', to: '/admin-services'},
//     {id: 1, iconColor: '#5F4FC5',img: ITServices, header: 'IT Services', to: '/it-services'},
//     {id: 2, iconColor: '#AF4EBB',img: OracleReports, header: 'Oracle Reports', to: '/oracle-reports'},
//     {id: 3, iconColor: '#0A89C1',img: HRSelfServices, header: 'HR Self Services', to: '/hr-self-services'},
//     {id: 4, iconColor: '#F4A65B',img: IncidentsCenter, header: 'Incidents Center', to: '/incidents-center'},
//     {id: 5, iconColor: '#F24343',img: CorrespondingSystem, header: 'Corresponding System', to: '/corresponding-system'},
//     {id: 6, iconColor: '#8285AA',img: ResearchCenter, header: 'Research Center', to: '/research-center'},
//     {id: 7, iconColor: '#97C10A',img: ESignatureTool, header: 'E Signature Tool', to: '/e-signature-tool'},
//     {id: 8, iconColor: '#E0E0E0',img: DMS, header: 'DMS', to: '/dms'},
//   ])

//   return <div className="services-container">
    
//     {services.map((service) => {
//       return <NavLink to={service.to} key={service.id}>
//         <div className="service-box">
//           <img src={service.img} alt={service.header} />
//           <h3>{service.header}</h3>
//         </div>
//       </NavLink>
//     })}
//   </div>
// }

// export default Services



























import React, { useState } from "react";
import './Services.css';

import { ReactComponent as AdminServices } from '../../../../icons/home/sevices/Admin Services.svg';
import { ReactComponent as ITServices } from '../../../../icons/home/sevices/IT Services.svg';
import { ReactComponent as OracleReports } from '../../../../icons/home/sevices/Oracle Reports.svg';
import { ReactComponent as HRSelfServices } from '../../../../icons/home/sevices/HR Self Services.svg';
import { ReactComponent as IncidentsCenter } from '../../../../icons/home/sevices/Incidents Center.svg';
import { ReactComponent as CorrespondingSystem } from '../../../../icons/home/sevices/Corresponding System.svg';
import { ReactComponent as ResearchCenter } from '../../../../icons/home/sevices/Research Center.svg';
import { ReactComponent as ESignatureTool } from '../../../../icons/home/sevices/E Signature Tool.svg';
import { ReactComponent as DMS } from '../../../../icons/home/sevices/DMS.svg';
import { NavLink } from "react-router-dom";


const Services = () => {


  const [services, setServices] = useState([
    {id: 0, img: <AdminServices />, header: 'Admin Services', to: '/admin-services'},
    {id: 1, img: <ITServices />, header: 'IT Services', to: '/it-services'},
    {id: 2, img: <OracleReports />, header: 'Oracle Reports', to: '/oracle-reports'},
    {id: 3, img: <HRSelfServices />, header: 'HR Self Services', to: '/hr-self-services'},
    {id: 4, img: <IncidentsCenter />, header: 'Incidents Center', to: '/incidents-center'},
    {id: 5, img: <CorrespondingSystem />, header: 'Corresponding System', to: '/corresponding-system'},
    {id: 6, img: <ResearchCenter />, header: 'Research Center', to: '/research-center'},
    {id: 7, img: <ESignatureTool />, header: 'E Signature Tool', to: '/e-signature-tool'},
    {id: 8, img: <DMS />, header: 'DMS', to: '/dms'},
  ])

  return <div className="services-container">
    {services.map((service) => {
      return <NavLink to={service.to} key={service.id}>
        <div className="service-box">
          <div>
            {service.img}
          </div>
          <h3>{service.header}</h3>
        </div>
      </NavLink>
    })}
  </div>
}

export default Services