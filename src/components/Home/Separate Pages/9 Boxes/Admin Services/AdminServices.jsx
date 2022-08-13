import React, { useState } from 'react'
import './AdminServices.css';

import { ReactComponent as AdminServicesIcon } from '../../../../../icons/home/sevices/Admin Services.svg';

import { ReactComponent as IssueVISAReequest } from '../../../../../icons/Admin Service Request/Issue VISA Reequest.svg';
import { ReactComponent as BusinessGateEntry } from '../../../../../icons/Admin Service Request/Business Gate Entry.svg';
import { ReactComponent as ShipmentRequest } from '../../../../../icons/Admin Service Request/Shipment Request.svg';
import { ReactComponent as OfficeSupplyRequest } from '../../../../../icons/Admin Service Request/Office Supply Request.svg';
import { ReactComponent as Maintenance } from '../../../../../icons/Admin Service Request/Maintenance.svg';
import { ReactComponent as VisitorVISA } from '../../../../../icons/Admin Service Request/Visitor VISA.svg';
import { ReactComponent as PurchaseRequisition } from '../../../../../icons/Admin Service Request/Purchase Requisition.svg';
import { ReactComponent as ReceiveOrderItems } from '../../../../../icons/Admin Service Request/Receive Order Items.svg';
import { ReactComponent as ReceiptConfitmation } from '../../../../../icons/Admin Service Request/Receipt Confitmation.svg';
import { ReactComponent as TransportationRequest } from '../../../../../icons/Admin Service Request/Transportation Request.svg';

import { ReactComponent as MyRequests } from '../../../../../icons/Admin Service Request/My Requests.svg';
import { ReactComponent as AssignedRequests } from '../../../../../icons/Admin Service Request/Assigned Requests.svg';


import WorldBG from '../../../../../icons/home/world.svg';

function AdminServices() {


  const [services, setServices] = useState([
    {bgColor: '#43A2CC',icon: <IssueVISAReequest />, text: 'Issue VISA Reequest'},
    {bgColor: '#F7937B',icon: <BusinessGateEntry />, text: 'Business Gate Entry'},
    {bgColor: '#E4A7EB',icon: <ShipmentRequest />, text: 'Shipment Request'},
    {bgColor: '#43A2CC',icon: <OfficeSupplyRequest />, text: 'Office Supply Request'},
    {bgColor: '#70CFAF',icon: <Maintenance />, text: 'Maintenance'},
    {bgColor: '#FD96A6',icon: <VisitorVISA />, text: 'Visitor VISA'},
    {bgColor: '#FBBE82',icon: <PurchaseRequisition />, text: 'Purchase Requisition'},
    {bgColor: '#70CFAF',icon: <ReceiveOrderItems />, text: 'Receive Order Items'},
    {bgColor: '#9BC9ED',icon: <ReceiptConfitmation />, text: 'Receipt Confitmation'},
    {bgColor: '#FBBE82',icon: <TransportationRequest />, text: 'Transportation Request'},
  ]);


  return (
    <div className='services-page-container'>
      <div className="header">
        <div style={{backgroundColor: '#79D5A7'}}>
          <AdminServicesIcon />
        </div>
        <h2>Admin Service Request</h2>
      </div>


      <div className='services-body-container'>
        

        <div className="services-boxs-container">
          {services.map((service, i) => {
            return <a className='box' key={i}>
              <div style={{backgroundColor: service.bgColor}}>
                {service.icon}
              </div>
              <h3>{service.text}</h3>
            </a>
          })}
        </div>


        <h4 className='services-second-header'>Request Center</h4>
        <div className="services-boxs-container">
          <img src={WorldBG} className='img-bg' alt="world background" />
          <a className='box'>
            <div style={{backgroundColor: '#FBBE82'}}>
              <MyRequests />
            </div>
            <h3>My Requests</h3>
          </a>
          <a className='box'>
            <div style={{backgroundColor: '#43A2CC'}}>
              <AssignedRequests />
            </div>
            <h3>Assigned Requests</h3>
          </a>
        </div>

      </div>
    </div>
  )
}

export default AdminServices