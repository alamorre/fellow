import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import functions
import { flipBlock, flagBlock } from '../../actions/game'

// Import components
import { Icon } from 'antd'

class Block extends Component {
  /**
  * This function will count the adjacent mines to an index
  */
  countAdjacentMines(block){
    const { index } = block
    const { game } = this.props

    var count = 0

    // Check top left
    if(index > 9 && index % 10 !== 0){
      const topLeft = index - 11
      if(game.blocks[topLeft].is_mine){
        count = count + 1
      }
    }

    // Check top
    if(index > 9){
      const top = index - 10
      if(game.blocks[top].is_mine){
        count = count + 1
      }
    }

    // Check top right
    if(index > 9 && index % 10 !== 9){
      const topRight = index - 9
      if(game.blocks[topRight].is_mine){
        count = count + 1
      }
    }

    // Check left
    if(index % 10 !== 0){
      const left = index - 1
      if(game.blocks[left].is_mine){
        count = count + 1
      }
    }

    // Check left
    if(index % 10 !== 9){
      const right = index + 1
      if(game.blocks[right].is_mine){
        count = count + 1
      }
    }

    // Check bottom left
    if(index < 90 && index % 10 !== 0){
      const bottomLeft = index + 9
      if(game.blocks[bottomLeft].is_mine){
        count = count + 1
      }
    }

    // Check bottom left
    if(index < 90){
      const bottom = index + 10
      if(game.blocks[bottom].is_mine){
        count = count + 1
      }
    }

    // Check bottom left
    if(index < 90 && index % 10 !== 9){
      const bottomRight = index + 11
      if(game.blocks[bottomRight].is_mine){
        count = count + 1
      }
    }

    // Return the count
    return count
  }

  // Send data that toggles the flag
  onFlag(block){
    const data = { id: block.id, is_flagged: !block.is_flagged }
    this.props.flagBlock(data)
  }

  // Set is flagged to true
  onFlip(block){
    const data = { id: block.id, is_flipped: true }
    this.props.flipBlock(data)
  }

  render(){
    const { block } = this.props
    const mineCount = this.countAdjacentMines(block)

    // Handle flipped
    if(block.is_flipped && !block.is_mine){
      return(
        <div style={ styles.flipped }>
          { mineCount > 0 && mineCount }
        </div>
      )
    }

    // If the user has lost, show all mines
    if(this.props.progress.hasLost && block.is_mine){
      return(
        <div style={ styles.flipped }>
          <Icon type="fire" style={{ fontSize: '20px', color: 'red' }} />
        </div>
      )
    }

    // Handle flipped
    if(block.is_flagged){
      return(
        <div
          onContextMenu={this.onFlag.bind(this, block)}
          style={ this.props.progress.hasWon ? styles.winner : styles.unflipped }>
          <Icon type="flag" style={{ fontSize: '20px' }} />
        </div>
      )
    }

    // Handle empty block
    return(
      <div
        style={ styles.unflipped }
        onClick={this.onFlip.bind(this, block)}
        onContextMenu={this.onFlag.bind(this, block)} />
    )
  }
}

const styles = {
  flipped: {
    width: '100%',
    height: '32px',
    fontSize: '20px',
    background: '#fff',
    textAlign: 'center',
    border: '1px solid black',
  },
  unflipped: {
    width: '100%',
    height: '32px',
    cursor: 'pointer',
    paddingTop: '4px',
    textAlign: 'center',
    background: '#e8e8e8',
    border: '1px solid black',
  },
  winner: {
    width: '100%',
    height: '32px',
    cursor: 'pointer',
    paddingTop: '4px',
    textAlign: 'center',
    background: '#d9f7be',
    border: '1px solid black',
  }
}

function mapStateToProps(state){
  return {
    game: state.game,
    progress: state.progress
  }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({ flipBlock, flagBlock }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)
