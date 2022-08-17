import React, { useContext, useEffect, useState } from 'react'
import './NotificationCenter.css'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import HistoryNavigation from '../Home/Separate Pages/History Navigation/HistoryNavigation'
import SimpleUserPanel from '../global/Simple User Panel/SimpleUserPanel'
import { UserContext } from '../../Context/userContext'
import { Checkbox, Input, Table } from 'antd'

function NotificationCenter() {

  
  const { user_data, notifications_count, mail_count, notification_center_data } = useContext(UserContext);
  const [allData, setAllData] = useState(notification_center_data)
  const [filteredData, setFilteredData] = useState([])
  const [selectedType, setSelectedType] = useState(['Oracle', 'eSign', 'SharedServices', 'CS']);
  const [selectedStatus, setSelectedStatus] = useState(['Pending']);
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
    },{
      title: 'Subject',
      dataIndex: 'subject',
    },{
      title: 'Date Time',
      dataIndex: 'dateTime',
    },{
      title: 'Status',
      dataIndex: 'status',
    },{
      title: 'Action',
      dataIndex: 'action',
    }
  ];
  // Filter by Status && Type
  useEffect(() => {
    setAllData(notification_center_data)
    setFilteredData(notification_center_data)
  }, [notification_center_data])
  const filterByStatus = (checkedValues) => {
    setSelectedStatus(checkedValues)
    const filteredData = allData.filter(g => checkedValues.includes(g.status) && selectedType.includes(g.From))
    setFilteredData(filteredData)
  }
  // Filter by Type && Status
  useEffect(() => {
    setFilteredData(allData.filter(g => selectedType.includes(g.From) && selectedStatus.includes(g.status)))
  }, [selectedType])





  return (
    <>
      <HistoryNavigation>
        <p>Notification Center</p>
      </HistoryNavigation>
      <SimpleUserPanel 
        userImage={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`}
        userName={user_data.Data?.DisplayName}
        notificationsCount={notifications_count}
        mailCount={mail_count}
      />
      <div className='notification-center-container'>
        <div className='notification-center_content'>
          <div className="notification_type-container">
            <div className="notification_type"
              style={{backgroundColor: selectedType.includes('Oracle') ? 'var(--main-color)' : 'var(--link-text-color)'}}
              onClick={() => setSelectedType(prev => {
                if(prev.includes('Oracle')) {
                  return prev.filter(t => t !== 'Oracle')
                } else {
                  return [...prev, 'Oracle']
                }
              })}
            >
              <div className='text'>
                <h1>0</h1>
                <h2>Oracle</h2>
              </div>
              <DownOutlined />
            </div>
            <div className="notification_type"
              style={{backgroundColor: selectedType.includes('eSign') ? 'var(--main-color)' : 'var(--link-text-color)'}}
              onClick={() => setSelectedType(prev => {
                if(prev.includes('eSign')) {
                  return prev.filter(t => t !== 'eSign')
                } else {
                  return [...prev, 'eSign']
                }
              })}
            >
              <div className='text'>
                <h1>{notification_center_data.filter(g => g.From === 'eSign').length}</h1>
                <h2>eSign Tool</h2>
              </div>
              <DownOutlined />
            </div>
            <div className="notification_type"
              style={{backgroundColor: selectedType.includes('SharedServices') ? 'var(--main-color)' : 'var(--link-text-color)'}}
              onClick={() => setSelectedType(prev => {
                if(prev.includes('SharedServices')) {
                  return prev.filter(t => t !== 'SharedServices')
                } else {
                  return [...prev, 'SharedServices']
                }
              })}
            >
              <div className='text'>
                <h1>0</h1>
                <h2>Shared Services</h2>
              </div>
              <DownOutlined />
            </div>
            <div className="notification_type"
              style={{backgroundColor: selectedType.includes('CS') ? 'var(--main-color)' : 'var(--link-text-color)'}}
              onClick={() => setSelectedType(prev => {
                if(prev.includes('CS')) {
                  return prev.filter(t => t !== 'CS')
                } else {
                  return [...prev, 'CS']
                }
              })}
            >
              <div className='text'>
                <h1>0</h1>
                <h2>Correponding System</h2>
              </div>
              <DownOutlined />
            </div>
          </div>
          <div className='status-bar'>
            <b>Status:</b>
            <Checkbox.Group 
              options={['Pending', 'Approved', 'Rejected']} 
              defaultValue={['Pending']} 
              onChange={checkedValues => filterByStatus(checkedValues)} 
            />
          </div>

          <div className="table">
            <div className="table-header">
              <h1>All Requests</h1>
              <Input placeholder="type to search" prefix={<SearchOutlined />} style={{width: '100%', maxWidth: '400px'}} />
            </div>
            <div>
              {
                notification_center_data.length
                ? <Table columns={columns} dataSource={filteredData} pagination={{position: ['none', 'bottomCenter'] }} />
                : <div className='loader' style={{position: 'relative'}}><div style={{width: '40px', height: '40px'}}></div></div>
              }
            </div>
          </div>
        </div>
          
        

      </div>
    </>
  )
}

export default NotificationCenter