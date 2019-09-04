import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from '../../functions/history'

import { Row, Col, Icon } from 'antd'

class TopBar extends Component {
  render(){
    const { game } = this.props
    const { gameLoading } = this.props.loaders

    return(
      <Row style={{ height: '42px', paddingTop: '8px' }}>
        {/* Padding Left */}
        <Col lg={7} md={2}/>

        {/* Bar & Content */}
        <Col lg={10} md={20}>
          <span
            onClick={() => history.push('/')}
            style={{ fontSize: '20px', cursor: 'pointer' }}>
            Flags Left: { game.flags_left }
          </span>

          {/* Render the game as Loading, Lost or Fine */}
          <span
            onClick={() => history.push('/')}
            style={{ fontSize: '20px', float: 'right', cursor: 'pointer' }}>
            { gameLoading && <Icon type="loading" /> }
            { (!gameLoading && game.has_lost) && <Icon id='game-lost-icon' type="frown" /> }
            { (!gameLoading && !game.has_lost) && <Icon id='game-okay-icon' type="smile" /> }
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
    loaders: state.loaders
  }
}

export default connect(mapStateToProps, {})(TopBar)
