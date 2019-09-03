import React, { Component } from 'react'

// Handle the imported components from Ant Design
import { Row, Col } from 'antd';

class Grid extends Component {
  render() {
    return(
      <Row>
        {/* Column offset */}
        <Col lg={7} md={2}/>

        {/* 10 Blocks in this row */}
        <Col lg={1} md={2} sm={2} xs={2}> 0 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 1 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 2 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 3 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 4 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 5 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 6 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 7 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 8 </Col>
        <Col lg={1} md={2} sm={2} xs={2}> 9 </Col>
      </Row>
    )
  }
}

export default Grid
