import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import the needed actions
import { fetchGame } from '../../actions/game'

// Import the imported and developed components
import Block from './block'
import { Row, Col } from 'antd';

class Grid extends Component {
  componentDidMount(){
    // Fetch the game if it's not it redux state
    if(!this.props.game.id && this.props.gameID){
      this.props.fetchGame(this.props.gameID, () => {}, () => {})
    }
  }


  renderBlocks(blocks){
    return blocks.map((block, index) => {
      return (
        <div key={`block-${index}`}>
          {/* Render the column offset for each row */}
          { index % 10 === 0 && <Col lg={7} md={2}/> }

          {/* Render the block */}
          <Col lg={1} md={2} sm={2} xs={2}>
            <Block block={block} />
          </Col>

          {/* Render new row after 10 blocks */}
          { index % 10 === 9 && <Col lg={7} md={2} style={{ height: '32px' }}/> }
        </div>
      )
    })
  }

  render() {
    const { game } = this.props

    // Return a loading component if loading
    if(!this.props.game.blocks){
      return (
        <Row>
          <Col xs={2} sm={2} md={7} />
          <div>Loading...</div>
        </Row>
      )
    }

    // Else return the blocks in a grid formation
    return(
      <Row>
        {/* 10 Blocks in this row */}
        {this.renderBlocks(game.blocks)}
      </Row>
    )
  }
}

function mapStateToProps(state){
  return { game: state.game }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchGame }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
