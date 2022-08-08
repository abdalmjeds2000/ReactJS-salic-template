import React, { useState } from 'react'
import './AdminServices.css';
import AdminServicesIcon from '../../../../../icons/home/sevices/Admin Services.svg';

import IssueVISAReequest from '../../../../../icons/Admin Service Request/Issue VISA Reequest.svg';
import BusinessGateEntry from '../../../../../icons/Admin Service Request/Business Gate Entry.svg';
import ShipmentRequest from '../../../../../icons/Admin Service Request/Shipment Request.svg';
import OfficeSupplyRequest from '../../../../../icons/Admin Service Request/Office Supply Request.svg';
import Maintenance from '../../../../../icons/Admin Service Request/Maintenance.svg';
import VisitorVISA from '../../../../../icons/Admin Service Request/Visitor VISA.svg';
import PurchaseRequisition from '../../../../../icons/Admin Service Request/Purchase Requisition.svg';
import ReceiveOrderItems from '../../../../../icons/Admin Service Request/Receive Order Items.svg';
import ReceiptConfitmation from '../../../../../icons/Admin Service Request/Receipt Confitmation.svg';
import TransportationRequest from '../../../../../icons/Admin Service Request/Transportation Request.svg';

import MyRequests from '../../../../../icons/Admin Service Request/My Requests.svg';
import AssignedRequests from '../../../../../icons/Admin Service Request/Assigned Requests.svg';


import WorldBG from '../../../../../icons/home/world.svg';

function AdminServices() {


  const [services, setServices] = useState([
    {icon: IssueVISAReequest, text: 'Issue VISA Reequest'},
    {icon: BusinessGateEntry, text: 'Business Gate Entry'},
    {icon: ShipmentRequest, text: 'Shipment Request'},
    {icon: OfficeSupplyRequest, text: 'Office Supply Request'},
    {icon: Maintenance, text: 'Maintenance'},
    {icon: VisitorVISA, text: 'Visitor VISA'},
    {icon: PurchaseRequisition, text: 'Purchase Requisition'},
    {icon: ReceiveOrderItems, text: 'Receive Order Items'},
    {icon: ReceiptConfitmation, text: 'Receipt Confitmation'},
    {icon: TransportationRequest, text: 'Transportation Request'},
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
            <img src={MyRequests} alt='icon box' />
            <h3>My Requests</h3>
          </div>
          <div className='box'>
            <img src={AssignedRequests} alt='icon box' />
            <h3>Assigned Requests</h3>
          </div>
        </div>
        <img src={WorldBG} className='img-bg' alt="world background" />

      </div>
    </div>
  )
}

export default AdminServices