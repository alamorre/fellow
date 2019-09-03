import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from '../../functions/history'

import { Row, Col, Icon } from 'antd'

class TopBar extends Component {
  render(){
    const { progress } = this.props

    return(
      <Row style={{ height: '42px', paddingTop: '8px' }}>
        {/* Padding Left */}
        <Col lg={7} md={2}/>

        {/* Bar & Content */}
        <Col lg={10} md={20}>
          <span
            onClick={() => history.push('/')}
            style={{ fontSize: '20px', cursor: 'pointer' }}>
            Mines Left: { progress.minesLeft }
          </span>

          <span
            onClick={() => history.push('/')}
            style={{ fontSize: '20px', float: 'right', cursor: 'pointer' }}>
            {
              progress.hasLost ?
              <Icon type="frown" /> :
              <Icon type="smile" />
            }
          </span>
        </Col>

        {/* Padding Right */}
        <Col lg={7} md={2}/>
      </Row>
    )
  }
}

function mapStateToProps(state){
  return {
    game: state.game,
    progress: state.progress
  }
}

export default connect(mapStateToProps, {})(TopBar)
