import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import the needed actions
import { fetchGame } from '../../actions/game'

// Import the imported and developed components
import Block from './block'
import { Row, Col } from 'antd'
import PageLoader from '../loader'

class Grid extends Component {
  /**
  * This function will fetch the game data if missing (upon open)
  */
  componentDidMount(){
    if(!this.props.game.id && this.props.gameID){
      this.props.fetchGame(this.props.gameID, () => {}, () => {})
    }
  }

  /**
  * This function render each block in a grid formation
  */
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
    // Gather the necessary data
    const { game } = this.props
    const { has_won } = game

    // Return a loading component if loading
    if(!game.blocks){
      return <PageLoader />
    }

    // Else return the blocks in a grid formation
    return(
      <Row id={ has_won ? `game-won-${game.id}` : `game-grid-${game.id}` }>
        { this.renderBlocks(game.blocks) }
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
