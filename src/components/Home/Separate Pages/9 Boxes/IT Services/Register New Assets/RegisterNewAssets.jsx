import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import HistoryNavigation from '../../../History Navigation/HistoryNavigation'
import { Button, Form, Input, Upload, Radio, Select, Space, DatePicker, InputNumber, Modal } from 'antd';
import FormPageTemplate from '../../Components/Form Page Template/FormPageTemplate';
import { UserContext } from '../../../../../../Context/userContext';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import SubmitCancel from '../../Components/Submit Cancel/SubmitCancel';

const { Option } = Select;
const layout = { labelCol: { span: 6 }, wrapperCol: { span: 12 } };

function RegisterNewAssets() {
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



  return (
    <>
      <HistoryNavigation>
        <NavLink to="/sites/newsalic/SitePages/Dev/dev.aspx/it-services">IT Service Center</NavLink>
        <p>Register New Asset</p>
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
          onFinish={values => console.log(values)} /* validateMessages={validateMessages} */
          layout="horizontal"
        >


          <Form.Item
            name="Creation Date"
            label="Creation Date"
            initialValue={getDateAndTime()}
          >
            <Input placeholder='Date' size='large' disabled />
          </Form.Item>
          <Form.Item
            name="Receiving Date"
            label="Receiving Date"
            rules={[{required: true,}]}
          >
            <DatePicker format='MM/DD/YYYY' size='large' placeholder='select the date you recieved the asset' />
          </Form.Item>
          <Form.Item
            name="Tag Number"
            label="Tag Number"
            rules={[{required: true,}]}
          >
            <Input placeholder='auto generated' size='large' />
          </Form.Item>
          <Form.Item
            name="S/N"
            label="S/N"
            rules={[{required: true,}]}
          >
            <Input placeholder='(i.e. 0A4WHMCD700181R)' size='large' />
          </Form.Item>
          <Form.Item
            name="Asset Number"
            label="Asset Number "
            rules={[{required: true,}]}
          >
            <Input placeholder='full asset number' size='large' />
          </Form.Item>
          <Form.Item
            name="Asset Name"
            label="Asset Name"
            rules={[{required: true,}]}
          >
            <Input placeholder='enter full name' size='large' />
          </Form.Item>

          <hr />

          <Form.Item
            name="Category"
            label="Category"
            rules={[{required: true,}]}
          >
            <Radio.Group onChange={e => console.log(e.target.value)} value={1}>
              <Space direction="vertical">
                <Radio value={1}>
                  Hardware Devices <br />
                  <span style={{color: 'var(--main-color)'}}>Hardware such as laptop, screen, or phone</span>
                </Radio>
                <Radio value={2}>
                  Software Licenses<br />
                  <span style={{color: 'var(--main-color)'}}>Software licenses such as Adobe and Office 365 Suite</span>
                </Radio>
                <Radio value={3}>
                  Cables & Accessories <br />
                  <span style={{color: 'var(--main-color)'}}>Computer or phone accessories such as USB cables, USB HUB, and USB Flashs</span>
                </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="Type" label="Type" rules={[{required: true,}]}>
            <Select
              showSearch
              placeholder="select device type"
              // onChange={value => console.log(value)}
              // onSearch={value => console.log(value)}
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              size="large"
            >
              <Option value="Laptop">Laptop</Option>
              <Option value="Monitor">Monitor</Option>
              <Option value="Printer">Printer</Option>
              <Option value="Disktop">Disktop</Option>
              <Option value="Server">Server</Option>
              <Option value="Access Point">Access Point</Option>
              <Option value="Codec">Codec</Option>
              <Option value="Core Switch">Core Switch</Option>
              <Option value="DC Monitor">DC Monitor</Option>
              <Option value="Fiber Connector">Fiber Connector</Option>
              <Option value="Fiber Patch Panel">Fiber Patch Panel</Option>
              <Option value="Firewall">Firewall</Option>
              <Option value="Internet Router">Internet Router</Option>
              <Option value="Ipad">Ipad</Option>
              <Option value="Multiplexer">Multiplexer</Option>
              <Option value="NVR">NVR</Option>
              <Option value="Patch Panel">Patch Panel</Option>
              <Option value="PC">PC</Option>
              <Option value="Port Replicator">Port Replicator</Option>
              <Option value="Printer">Printer</Option>
              <Option value="Rack">Rack</Option>
              <Option value="Rack Server">Rack Server</Option>
              <Option value="Scheduling Panel">Scheduling Panel</Option>
              <Option value="Server">Server</Option>
              <Option value="Siemens Simatic">Siemens Simatic</Option>
              <Option value="Storage Server">Storage Server</Option>
              <Option value="Switch">Switch</Option>
              <Option value="UPS">UPS</Option>
              <Option value="UPS 2">UPS 2</Option>
              <Option value="Video Conference">Video Conference</Option>
              <Option value="Voice Router">Voice Router</Option>
              <Option value="Wireless Controller">Wireless Controller</Option>
              <Option value="Undefined">Undefined</Option>
              <Option value="Module">Module</Option>
              <Option value="SDS">SDS</Option>
              <Option value="Attendance">Attendance</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Brand/Manufacture/Company" label="Brand/Manufacture/Company" rules={[{required: true,}]}>
            <Select
              showSearch
              placeholder="select one value"
              // onChange={value => console.log(value)}
              // onSearch={value => console.log(value)}
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              size="large"
            >
              <Option value="Laptop">Laptop</Option>
              <Option value="Monitor">Monitor</Option>
              <Option value="Printer">Printer</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Model/Version" label="Model/Version" rules={[{required: true,}]}>
            <Select
              showSearch
              placeholder="select device model"
              optionFilterProp="children"
              // onChange={value => console.log(value)}
              // onSearch={value => console.log(value)}
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              size="large"
            >
              <Option value="jack">Lorem, ipsum dolor.</Option>
              <Option value="lucy">Lorem ipsum dolor sit amet consectetur.</Option>
              <Option value="tom">Lorem ipsum dolor sit.</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Classification" label="Classification" >
            <Select placeholder="employee name" size="large" /* onChange={value => console.log(value)} */ >
              <Option value="Normal">Normal</Option>
              <Option value="Meduim">Meduim</Option>
              <Option value="High">High</Option>
              <Option value="Critical">Critical</Option>
            </Select>
          </Form.Item>

          <hr />

          <Form.Item name="Quantity" label="Quantity" initialValue={1}>
            <InputNumber size="large" min={1} max={1000000} placeholder="default is 1" />
          </Form.Item>
          <Form.Item name="Cost" label="Cost" rules={[{required: true,}]}>
            <InputNumber size="large" min={1} max={1000000} placeholder="asset cost in SAR" />
          </Form.Item>
          <Form.Item name="Purchase Order #" label="Purchase Order #">
            <Input placeholder='PO# (i.e. 800)' size='large' />
          </Form.Item>
          <Form.Item name="Warranty/Expiration" label="Warranty/Expiration" rules={[{required: true,}]}>
            <InputNumber size="large" min={-1000000} max={1000000} placeholder="warranty in months" />
          </Form.Item>

          <hr />

          <Form.Item name="Supplier" label="Supplier" rules={[{required: true,}]}>
            <Select
              showSearch
              placeholder="select supplier name"
              // onChange={value => console.log(value)}
              // onSearch={value => console.log(value)}
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              size="large"
            >
              <Option value="jack">Lorem, ipsum dolor.</Option>
              <Option value="lucy">Lorem ipsum dolor sit amet consectetur.</Option>
              <Option value="tom">Lorem ipsum dolor sit.</Option>
            </Select>
          </Form.Item>
          <Form.Item name="Contact Info" label="Contact Info">
            <Input placeholder='supplier address / telephone' size='large' />
          </Form.Item>

          <hr />

          <Form.Item name="Sub devices" label="Sub devices">
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} align="baseline">
                      <Form.Item {...restField} name={[name, 'device name']}>
                        <Input placeholder="device name (e.g. HP charge 75W)" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'tag number']}>
                        <Input placeholder="tag number" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'serial number']}>
                        <Input placeholder="serial number" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>
          <Form.Item name="Descriptions" label="Descriptions">
            <Input.TextArea rows={6} placeholder="write a brief description" />
          </Form.Item>
          <Form.Item name="Photos" label="Photos">
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

export default RegisterNewAssets