import React from 'react'
import { Row, Col } from 'antd';
import './style.css'
import Button from 'antd/lib/button/index';
export default function Card({ data: { _id, sourceIdentityId, state, payload: { reportType, message } }, onClick }) {
  const displayData = {
    _id,
    id: sourceIdentityId,
    state,
    type: reportType,
    message
  }

  console.log({ displayData, onClick })
  return (
    <Row className="card">
      <Col className="col-data" >
        {Object.entries(displayData).map(([k, v]) => <div className="col-data-item"> {k} : {v || 'N/A'}</div>)}
        <a className="col-data-item" href='#'> Details...</a>
      </Col>
      <Col className="col-button" >
        <Button onClick={(e) => onClick(displayData._id, {
          "ticketState": "CLOSED"
        })} type="primary" primary className='but'>
          Resolve
        </Button>
        <Button onClick={(e) => onClick(displayData._id, {
          "ticketState": "BLOCKED"
        })} danger type="primary" className='but'>
          Block
        </Button>
      </Col>
    </Row>
  )
}
