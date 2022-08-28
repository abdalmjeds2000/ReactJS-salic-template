import React, { useContext, useEffect, useRef, useState } from 'react';

import { NavLink } from 'react-router-dom'
import { Button, Col, Form, Input, message, Upload, Radio, Row, Select, Space, DatePicker, InputNumber, Popconfirm, Table } from 'antd';
import moment from 'moment';

import HistoryNavigation from '../../../History Navigation/HistoryNavigation'
import FormPageTemplate from '../../Components/Form Page Template/FormPageTemplate'
import { UserContext } from '../../../../../../Context/userContext';
import { EnvironmentOutlined } from '@ant-design/icons';
import SubmitCancel from '../../Components/Submit Cancel/SubmitCancel';
import EditableTableTransportation from '../../Components/Editable Table/EditableTableTransportation';
const { Search } = Input;
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 12 } };




function TransportationRequest() {

  const { user_data } = useContext(UserContext);
  const [serivceType, setSerivceType] = useState('');

  
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    console.log(dataSource)
  }, [dataSource])

  return (
    <>
      <HistoryNavigation>
        <NavLink to="/sites/newsalic/SitePages/Dev/dev.aspx/admin-services">Admin Service</NavLink>
        <p>Transportation Request</p>
      </HistoryNavigation>
      

      <FormPageTemplate
        user_data={user_data}
        pageTitle='New Transportation Request'
        tips_userInfo={[
          {title: 'SALIC', text: user_data.Data?.Department},
          {title: 'Nationality', text: user_data.Data?.Nationality},
          {title: 'ID #', text: user_data.Data?.Id},
        ]}
        tipsList={[
          "Fill out required fields carefully.",
          "Check your email regularly. You will receive a notification on every future actions",
          "For additional information, Please contact administrative office or call us at +966 55 5040 314"
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

          <Form.Item name="Date" label="Date" rules={[{required: true,}]}>
            <DatePicker 
              showTime 
              format="YYYY-MM-DD HH:mm" 
              disabledDate={current => current && current < moment().endOf('day')} 
              size='large'
              /* onChange={} onOk={} */ 
            />
          </Form.Item>
          <Form.Item name="From" label="From" rules={[{required: true}]} >
            <Row gutter={[0, 5]}>
              <Input placeholder='' size='large' gutter={10} />
              <Search 
                placeholder="google map link" 
                allowClear 
                enterButton={<a href='https://www.google.com/maps' target="blank"><EnvironmentOutlined /></a>}
              />
            </Row>
          </Form.Item>
          <Form.Item name="To" label="To" rules={[{required: true}]} >
            <Row gutter={[0, 5]}>
              <Input placeholder='' size='large' gutter={10} />
              <Search 
                placeholder="google map link" 
                allowClear 
                enterButton={<a href='https://www.google.com/maps' target="blank"><EnvironmentOutlined /></a>}
              />
            </Row>
          </Form.Item>
          
          <hr />
          
          <Form.Item name="Serivce Type" label="Serivce Type">
            <Radio.Group
              options={[{label: 'One Way', value: 'One Way'}, {label: 'Round Trip', value: 'Round Trip'}]}
              onChange={ ({target: {value}}) => setSerivceType(value) }
              value={serivceType}
              optionType="button"
              buttonStyle="solid"
              style={{width: '100%'}}
              defaultValue="One Way"
            />
          </Form.Item>
          {serivceType === 'Round Trip' && 
          <Form.Item name="Waiting Time" label="Waiting Time">
            <Input placeholder='' size='large' />
          </Form.Item>}
          
          <hr />

            <EditableTableTransportation dataSource={dataSource} setDataSource={setDataSource} />

          <hr />


          <SubmitCancel formSubmitHandler={_ => {alert('Submit')}} />
        </Form>
      </FormPageTemplate>
    </>
  )
}

export default TransportationRequest