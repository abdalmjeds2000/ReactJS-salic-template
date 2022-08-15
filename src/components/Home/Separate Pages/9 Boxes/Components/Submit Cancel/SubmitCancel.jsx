import { Button, Col, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function SubmitCancel(props) {
  const navigate = useNavigate();

  return (
    <Row gutter={10} justify="center">
      <Col>
        <Button type="primary" htmlType='submit' onClick={props.formSubmitHandler}>
          Submit
        </Button>
      </Col>
      <Col>
        <Button type="ghost" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Col>
    </Row>
  )
}

export default SubmitCancel