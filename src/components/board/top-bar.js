import React, { Component } from 'react'

import { Row, Col } from 'antd';

class TopBar extends Component {
  render(){
    return(
      <Row>
        <Col lg={7} md={2}/>
        <Col lg={14} md={20}>
          This is the top bar
        </Col>
        <Col lg={7} md={2}/>
      </Row>
    )
  }
}

export default TopBar
