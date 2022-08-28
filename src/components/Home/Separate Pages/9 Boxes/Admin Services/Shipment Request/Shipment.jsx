import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Col, Form, Input, message, Upload, Radio, Row, Select, Space, DatePicker, InputNumber } from 'antd';
import HistoryNavigation from '../../../History Navigation/HistoryNavigation'
import FormPageTemplate from '../../Components/Form Page Template/FormPageTemplate'
import { UserContext } from '../../../../../../Context/userContext';
import SubmitCancel from '../../Components/Submit Cancel/SubmitCancel';

const { Option } = Select;
const { Dragger } = Upload;
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 12 } };


function Shipment() {
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
        <NavLink to="/sites/newsalic/SitePages/Dev/dev.aspx/admin-services">Admin Service</NavLink>
        <p>Shipment Request</p>
      </HistoryNavigation>
      

      <FormPageTemplate
        user_data={user_data}
        pageTitle='New Shipment Request'
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

          <Form.Item name="Sender Mobile" label="Sender Mobile" rules={[{required: true}]} >
            <Input placeholder='sender name or mobile number' size='large' />
          </Form.Item>
          <Form.Item name="Source Address" label="Source Address" rules={[{required: true}]} >
            <Input placeholder='from location' size='large' />
          </Form.Item>
          <Form.Item name="Receiver Mobile" label="Receiver Mobile" rules={[{required: true}]} >
            <Input placeholder='Receiver name or mobile number' size='large' />
          </Form.Item>
          <Form.Item name=" Destination Address" label="Destination Address" rules={[{required: true}]} >
            <Input placeholder='to location' size='large' />
          </Form.Item>
          <Form.Item name="Descriptions" label="Descriptions">
            <Input.TextArea rows={6} placeholder="write a brief description" />
          </Form.Item>



          <SubmitCancel formSubmitHandler={_ => {alert('Submit')}} />
        </Form>
      </FormPageTemplate>
    </>
  )
}

export default Shipment