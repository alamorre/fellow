import React, { Component } from 'react'

// Import components
import { Row, Icon } from 'antd'

class PageLoader extends Component {
  render(){
    return(
      <Row style={{ position: 'fixed', top: '20%', textAlign: 'center' }}>
        {/* Spinning Icon */}
        <Icon type="loading" style={{ fontSize: 180, color: '#1890ff', position: 'relative', left: '-70px', top: '15px' }} spin />

        {/* Loading Text */}
        <div style={{position: 'relative', top: '-90px', fontSize: '24px'}}>
          <b>Loading</b>
        </div>
      </Row>
    )
  }
}

export default PageLoader
