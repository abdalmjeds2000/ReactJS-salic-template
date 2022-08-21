import React, { useContext, useEffect, useRef, useState } from 'react'
import './NotificationCenter.css'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import HistoryNavigation from '../Home/Separate Pages/History Navigation/HistoryNavigation'
import SimpleUserPanel from '../global/Simple User Panel/SimpleUserPanel'
import { UserContext } from '../../Context/userContext'
import { Button, Checkbox, Input, Space, Table } from 'antd'
import Highlighter from 'react-highlight-words';


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}



function NotificationCenter() {
  const { user_data, notifications_count, mail_count, notification_center_data } = useContext(UserContext);

  const [allData, setAllData] = useState(notification_center_data)
  const [filteredData, setFilteredData] = useState([])
  const [selectedType, setSelectedType] = useState(['Oracle', 'eSign', 'SharedServices', 'CS']);
  const [selectedStatus, setSelectedStatus] = useState(['Pending']);
  const [typeToSearchText, setTypeToSearchText] = useState('');


  // Get Window Size
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {setWindowSize(getWindowSize());}
    window.addEventListener('resize', handleWindowResize);
  }, []);



  // Filter By Input Search Field
  let typeToSearch = (value) => {
    setTypeToSearchText(value)
    const searchFiltered = allData.filter(n => {
      return (
        (
          n.subject.props.children[0].props.children.includes(value.trim()) ||
          n.subject.props.children[1].includes(value.trim()) ||
          n.dateTime.includes(value.trim()) ||
          n.id.includes(value) ||
          n.status.toLowerCase().includes(value.toLowerCase())
        ) && 
        selectedStatus.includes(n.status) && 
        selectedType.includes(n.From)
      )
    });
    setFilteredData(searchFiltered);
  }


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
    setTypeToSearchText('')
  }, [selectedType])


  // Search By Columns Code
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      ...getColumnSearchProps('id')
    },{
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      // ...getColumnSearchProps('subject')
    },{
      title: 'Date Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
      ...getColumnSearchProps('dateTime')
    },{
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...getColumnSearchProps('status')
    },{
      title: 'Action',
      dataIndex: 'action',
    }
  ];


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
              style={{backgroundColor: selectedType.includes('Oracle') ? 'var(--link-text-color)' : 'var(--main-color)'}}
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
              style={{backgroundColor: selectedType.includes('eSign') ? 'var(--link-text-color)' : 'var(--main-color)'}}
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
              style={{backgroundColor: selectedType.includes('SharedServices') ? 'var(--link-text-color)' : 'var(--main-color)'}}
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
              style={{backgroundColor: selectedType.includes('CS') ? 'var(--link-text-color)' : 'var(--main-color)'}}
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
            {windowSize.innerWidth > 600 ? <b>Status:</b> : ''}
            <Checkbox.Group 
              options={['Pending', 'Approved', 'Rejected']} 
              defaultValue={['Pending']} 
              onChange={checkedValues => filterByStatus(checkedValues)} 
            />
          </div>

          <div className="table">
            <div className="table-header">
              <h1>All Requests</h1>
              <Input placeholder="type to search" value={typeToSearchText} onChange={e => typeToSearch(e.target.value)} prefix={<SearchOutlined />} style={{width: '100%', maxWidth: '400px'}} />
            </div>
            <div style={{overflowX: 'auto'}}>
              {
                notification_center_data.length ? (
                  windowSize.innerWidth > 600 
                  ? <Table 
                      columns={columns} 
                      dataSource={filteredData} 
                      pagination={{position: ['none', 'bottomCenter'], pageSize: 50, hideOnSinglePage: true }} 
                    />
                  : <Table 
                      columns={columns.filter(r => r.dataIndex === 'id' || r.dataIndex === 'subject')} 
                      dataSource={filteredData} 
                      pagination={{position: ['none', 'bottomCenter'], pageSize: 50, hideOnSinglePage: true }} 
                      expandable={{
                        expandedRowRender: (record) => (
                          <div style={{paddingLeft: '10px'}}>
                            <><b>Date Time: </b>{record.dateTime}</><br/>
                            <><b>Status: </b>{record.status}</><br/>
                            <><b>Action: </b>{record.action}</>
                          </div>
                        ),
                      }}
                    />
                  )
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