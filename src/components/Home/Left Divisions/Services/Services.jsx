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


  const services = [
    {id: 0, img: <AdminServices />, header: 'Admin Services', to: '/sites/newsalic/SitePages/Dev/dev.aspx/admin-services'},
    {id: 1, img: <ITServices />, header: 'IT Services', to: '/sites/newsalic/SitePages/Dev/dev.aspx/it-services'},
    {id: 2, img: <OracleReports />, header: 'Oracle Reports', to: '/sites/newsalic/SitePages/Dev/dev.aspx/oracle-reports'},
    {id: 3, img: <HRSelfServices />, header: 'HR Self Services', to: '/sites/newsalic/SitePages/Dev/dev.aspx/hr-self-services'},
    {id: 4, img: <IncidentsCenter />, header: 'Incidents Center', to: '/sites/newsalic/SitePages/Dev/dev.aspx/incidents-center'},
    {id: 5, img: <CorrespondingSystem />, header: 'Corresponding System', to: '/sites/newsalic/SitePages/Dev/dev.aspx/corresponding-system'},
    {id: 6, img: <ResearchCenter />, header: 'Research Center', to: '/sites/newsalic/SitePages/Dev/dev.aspx/research-center'},
    {id: 7, img: <ESignatureTool />, header: 'E Signature Tool', to: '/sites/newsalic/SitePages/Dev/dev.aspx/e-signature-tool'},
    {id: 8, img: <DMS />, header: 'DMS', to: '/dms'},
  ];

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