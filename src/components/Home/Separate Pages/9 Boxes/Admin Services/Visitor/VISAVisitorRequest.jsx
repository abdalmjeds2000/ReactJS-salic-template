import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Form, Input, message, Upload, Radio, Row, Select, Space, DatePicker, InputNumber } from 'antd';
import HistoryNavigation from '../../../History Navigation/HistoryNavigation'
import FormPageTemplate from '../../Components/Form Page Template/FormPageTemplate'
import { UserContext } from '../../../../../../Context/userContext';
import { InboxOutlined } from '@ant-design/icons';
import SubmitCancel from '../../Components/Submit Cancel/SubmitCancel';

const { Option } = Select;
const { Dragger } = Upload;
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 12 } };




function VISAVisitorRequest() {
  const { user_data } = useContext(UserContext);

  let getDateAndTime = () => {
    const today = new Date();
    const date = today.getDate() +'-'+ (today.getMonth()+1)+'-' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() 
    return date + ' ' + time
  }



  return (
    <>
      <HistoryNavigation>
        <NavLink to="/admin-services">Admin Service</NavLink>
        <p>Visitor VISA Request</p>
      </HistoryNavigation>
      

      <FormPageTemplate
        user_data={user_data}
        pageTitle='New VISA Visitor Request'
        tips_userInfo={[
          {title: 'SALIC', text: user_data.Data?.Department},
          {title: 'Nationality', text: user_data.Data?.Nationality},
          {title: 'ID #', text: user_data.Data?.Id},
        ]}
        tipsList={[
          "Fill out required fields carefully.",
          "Check your email regularly. You will receive a notification on every future actions",
        ]}
      >
        <Form 
          {...layout} 
          colon={false}
          labelWrap 
          name="service-request" 
          onFinish={values => console.log(values)} /* validateMessages={validateMessages} */
          layout="horizontal"
        >

          <Form.Item
            name={'date'}
            label="Date"
            rules={[{required: true,}]}
            initialValue={getDateAndTime()}
          >
            <Input placeholder='Date' size='large' disabled />
          </Form.Item>
          
          <hr />

          <Form.Item name="Name Of Visitor" label="Name Of Visitor" rules={[{required: true}]} >
            <Input placeholder='full name' size='large' />
          </Form.Item>
          <Form.Item name="Nationality" label="Nationality" rules={[{required: true,}]}>
            <Select
              showSearch
              placeholder="Nationality"
              // onChange={value => console.log(value)}
              // onSearch={value => console.log(value)}
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              size="large"
            >
              <Option value="Palestine">Palestine</Option>
              <Option value="lucy">Saudi</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Profession" label="Profession" rules={[{required: true}]} >
            <Input placeholder='job title, or job field' size='large' />
          </Form.Item>
          <Form.Item name="Company and Address" label="Company and Address">
            <Input.TextArea rows={6} placeholder="write a brief description" />
          </Form.Item>
          <Form.Item name="Expected Date Arrival" label="Expected Date Arrival">
            <DatePicker placeholder='mm/dd/yyyy' format='MM/DD/YYYY' size='large' />
          </Form.Item>
          <Form.Item name="Type VISA" label="Type VISA" rules={[{required: true,}]}>
            <Select
              showSearch
              placeholder=""
              // onChange={value => console.log(value)}
              // onSearch={value => console.log(value)}
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              size="large"
            >
              <Option value="Single">Single</Option>
              <Option value="Multiple">Multiple</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Saudi Embassy Location" label="Saudi Embassy Location" rules={[{required: true}]} >
            <Input placeholder='the location of Saudi Embassy' size='large' />
          </Form.Item>


          <Form.Item name="Period Of Visit (days)" label="Period Of Visit (days)" initialValue={1} rules={[{required: true,}]}>
            <InputNumber size="large" min={-1000000} max={1000000} placeholder="Period Of Visit (days)" />
          </Form.Item>
          <Form.Item name="Attach" label="Attach">
            <Dragger>
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


          <SubmitCancel formSubmitHandler={_ => {alert('Submit')}} />
        </Form>
      </FormPageTemplate>
    </>
  )
}

export default VISAVisitorRequest