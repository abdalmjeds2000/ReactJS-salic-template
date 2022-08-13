import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../../../../Context/userContext';
import './NewITServiceRequest.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Form, Input, message, Upload, Radio, Row, Select, Space } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';
import HistoryNavigation from '../../../History Navigation/HistoryNavigation';

const { Option } = Select;
const { Dragger } = Upload;

const layout = { labelCol: { span: 6 }, wrapperCol: { span: 12 } };



function NewITServiceRequest() {
  const { user_data } = useContext(UserContext);

  let getDateAndTime = () => {
    const today = new Date();
    const date = today.getDate() +'-'+ (today.getMonth()+1)+'-' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() 
    return date + ' ' + time
  }

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  


  let formSubmitHandler = () => {
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  
  return (
    <>
      <HistoryNavigation>
        <NavLink to="/it-services">IT Service Center</NavLink>
        <p>New Service Request</p>
      </HistoryNavigation>
      <div className='it-services_new-request-container'>
        <div className="content-services-request">
          <div className="header">
            <h1>Service Request</h1>
          </div>
          <div className="content">


            <div className="form">
              <Form 
                {...layout} 
                colon={false}
                labelWrap 
                name="service-request" 
                onFinish={values => console.log(values)} /* validateMessages={validateMessages} */>
                
                <Form.Item
                  name={'date'}
                  label="Date"
                  rules={[{required: true,}]}
                  initialValue={getDateAndTime()}
                >
                  <Input placeholder='Date' size='large' disabled />
                </Form.Item>
                
                <Form.Item name={'On Behalf Of'} label="On Behalf Of" >
                  <Select
                    showSearch
                    placeholder="employee name"
                    optionFilterProp="children"
                    // onChange={value => console.log(value)}
                    // onSearch={value => console.log(value)}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    size="large"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name={'subject'}
                  label="Subject"
                  rules={[{required: true,}]}
                >
                  <Input placeholder='write breif subject' size='large' />
                </Form.Item>

                <hr />

                <Form.Item
                  name={'Issue Category'}
                  label="Issue Category"
                  rules={[{required: true,}]}
                >
                  <Radio.Group onChange={e => console.log(e.target.value)} value={1}>
                    <Space direction="vertical">
                      <Radio value={1}>
                        Hardware & Devices <br />
                        <span style={{color: 'var(--main-color)'}}>Hardware problem such as laptop or screen broken</span>
                      </Radio>
                      <Radio value={2}>
                        Software & Applications <br />
                        <span style={{color: 'var(--main-color)'}}>Hardware problem such as laptop or screen broken</span>
                      </Radio>
                      <Radio value={3}>
                        Access, Permissions, and Licenses <br />
                        <span style={{color: 'var(--main-color)'}}>Hardware problem such as laptop or screen broken</span>
                      </Radio>
                      <Radio value={4}>
                        Security Incident <br />
                        <span style={{color: 'var(--main-color)'}}>Hardware problem such as laptop or screen broken</span>
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>


                <Form.Item name={'Priority'} label="Priority" >
                  <Select placeholder="employee name" size="large" /* onChange={value => console.log(value)} */ >
                    <Option value="jack">Normal</Option>
                    <Option value="lucy">Critical</Option>
                  </Select>
                </Form.Item>


                <Form.Item name={'Issue Type'} label="Issue Type" >
                  <Select
                    showSearch
                    placeholder="Issue Type"
                    optionFilterProp="children"
                    // onChange={value => console.log(value)}
                    // onSearch={value => console.log(value)}
                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    size="large"
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
                </Form.Item>

                <hr />

                <Form.Item 
                  name={'Descriptions / Justifications'} 
                  label="Descriptions / Justifications"
                  rules={[{required: true}]}
                >
                  <Input.TextArea />
                </Form.Item>

                <Form.Item name={'Documents'} label="Documents" >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                      band files
                    </p>
                  </Dragger>
                </Form.Item>


                <Row gutter={10} justify="center">
                  <Col>
                    <Button type="primary" htmlType='submit' onClick={formSubmitHandler}>
                      Submit
                    </Button>
                  </Col>
                  <Col>
                    <Button type="ghost">
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
              
            </div>
        
            
            <div className="tips">
              <div className="tips_user-info">
                <div className="tips_user-info_text">
                  <div>
                    <p><b>SALIC</b></p>
                    <p>{user_data.Data?.Department}</p>
                  </div>
                </div>
                <div className="tips_user-info_img">
                  <img 
                    src={`https://salic.sharepoint.com/sites/newsalic/_layouts/15/userphoto.aspx?size=M&username=${user_data.Data?.Mail}`} 
                    alt="" 
                  />
                </div>
              </div>
              <div className="tips_tips-container">
                <div className="tips_header">
                  <FontAwesomeIcon icon={faLightbulb} /> Tips
                </div>
                <ul>
                  <li>Fill out required fields carefully.</li>
                  <li>If Possile upload captured images for the problem.</li>
                  <li>Be specific in describing the problem you are facing. Please do not write fussy words or incomplete statements.</li>
                  <li>Be specific in choosing "Issue Category" as the system will assign SR. to the appropriate team member.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewITServiceRequest