import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

  render(){
    const { block } = this.props

    // Handle flipped
    if(block.is_flipped){
      if(block.is_mine){ // You lose if it's a mine
        return(
          <div style={ styles.flipped }>
            <Icon type="close-circle" style={{ fontSize: '20px', color: 'red' }} />
            { block.is_mine && 'x' }
          </div>
        )

      } else { // Else render the block with a number or nothing
        return(
          <div style={ styles.flipped }> { this.countAdjacentMines(block) } { block.is_mine && 'x' } </div>
        )
      }
    }

    // Handle flipped
    if(block.is_flagged){
      return(
        <div style={ styles.unflipped }>
          <Icon type="flag" style={{ fontSize: '20px' }} />
          { block.is_mine && 'x' }
        </div>
      )
    }

    // Handle empty block
    return(
      <div style={ styles.unflipped }>{ block.is_mine && 'x' }</div>
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
  }
}

function mapStateToProps(state){
  return { game: state.game }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)
