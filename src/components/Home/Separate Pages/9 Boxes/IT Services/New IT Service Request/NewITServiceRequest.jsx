import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../../../Context/userContext';
import { Button, Col, Form, Input, message, Modal, Upload, Radio, Row, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'
import { NavLink, useNavigate } from 'react-router-dom';

import HistoryNavigation from '../../../History Navigation/HistoryNavigation';
import FormPageTemplate from '../../Components/Form Page Template/FormPageTemplate';
import SubmitCancel from '../../Components/Submit Cancel/SubmitCancel';



const { Option } = Select;
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 12 } };







function NewITServiceRequest() {
  const { user_data } = useContext(UserContext);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewVisible(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      // file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);




  let getDateAndTime = () => {
    const today = new Date();
    const date = today.getDate() +'-'+ (today.getMonth()+1)+'-' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() 
    return date + ' ' + time
  }

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


      <FormPageTemplate
        user_data={user_data}
        pageTitle='Service Request'
        tips_userInfo={[{title: 'SALIC', text: user_data.Data?.Department}]}
        tipsList={[
          "Fill out required fields carefully.",
          "If Possile upload captured images for the problem.",
          "Be specific in describing the problem you are facing. Please do not write fussy words or incomplete statements.",
          "Be specific in choosing 'Issue Category' as the system will assign SR. to the appropriate team member."
        ]}
      >
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
                  <span style={{color: 'var(--main-color)'}}>Software issues such as Oracle, SharePoint, and Office 365 Suite</span>
                </Radio>
                <Radio value={3}>
                  Access, Permissions, and Licenses <br />
                  <span style={{color: 'var(--main-color)'}}>Access Issues such as Permissions to access a resource</span>
                </Radio>
                <Radio value={4}>
                  Security Incident <br />
                  <span style={{color: 'var(--main-color)'}}>Security Incidents such as email fishing.</span>
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="Priority" label="Priority" >
            <Select placeholder="employee name" size="large" /* onChange={value => console.log(value)} */ >
              <Option value="jack">Normal</Option>
              <Option value="lucy">Critical</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Issue Type" label="Issue Type" >
            <Input placeholder='write Issue Type' size='large' />
          </Form.Item>

          <hr />

          <Form.Item 
            name={'Descriptions / Justifications'} 
            label="Descriptions / Justifications"
            rules={[{required: true}]}
          >
            <Input.TextArea rows={6} placeholder="write a brief description" />
          </Form.Item>
          
          <Form.Item name="Documents" label="Documents">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : <div><PlusOutlined /><div style={{marginTop: 8,}}>Upload</div></div>}
            </Upload>
            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img
                alt="example"
                style={{
                  width: '100%',
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>

          <SubmitCancel formSubmitHandler={_ => {alert('Submit')}} />
        </Form>
      </FormPageTemplate>


    </>
  )
}

export default NewITServiceRequest