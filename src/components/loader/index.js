import React, { Component } from 'react'

// Import components
import { Icon } from 'antd'

class PageLoader extends Component {
  render(){
    return(
      <div style={{ position: 'relative', left: '50%' }}>
        <Icon
          spin={true}
          type="loading"
          style={{
            top: '8vw',
            left: '-45px',
            fontSize: '90px',
            color: '#1890ff',
            position: 'absolute'
          }}
        />
      </div>
    )
  }
}

export default PageLoader
