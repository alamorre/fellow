import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import functions
import { flipBlock, flagBlock } from '../../actions/game'
import { ErrorNotification } from '../notifications'

// Import components
import { Icon } from 'antd'

class Block extends Component {
  /**
  * This function toggles is_flagged on this block
  */
  onFlag(block){
    // Make sure the game is not over
    if(this.props.game.has_won || this.props.game.has_lost){
      ErrorNotification('The game is over...')
      return;
    }

    // Make sure the user isn't using flag 0 (i.e. no more to set)
    if(this.props.game.flags_left === 0 && !block.is_flagged){
      ErrorNotification('Oops! You have not more flags left, free one up!')
      return;
    }

    // If so, send a flag API call
    const data = { id: block.id, is_flagged: !block.is_flagged }
    this.props.flagBlock(data)
  }

  /**
  * This function sets is_flipped to true on this block
  */
  onFlip(block){
    // Make sure the user is allowed to flip
    if(this.props.game.has_won || this.props.game.has_lost){
      ErrorNotification('The game is over...')
      return;
    }

    // If so, send a flip API call
    const data = { id: block.id, is_flipped: true }
    this.props.flipBlock(data)
  }

  render(){
    // Gather the necessary data
    const { block } = this.props

    /**
    * There are four tpyes of blocks
    * 1. Flipped blocks
    * 2. Flipped mines (render all at once)
    * 3. Flagged blocks
    * 4. Unflipped blocks
    */

    // 1. Handle flipped blocks
    if(block.is_flipped && !block.is_mine){
      return(
        <div
          style={ styles.flipped }
          className={`block-${block.index} flip-${block.index}`}>
          <div style={ styles[block.nearby_mines] }>
            { (block.nearby_mines && block.nearby_mines > 0) && block.nearby_mines }
          </div>
        </div>
      )
    }

    // 2. Handle flipped mines (render all at once)
    if(this.props.game.has_lost && block.is_mine){
      return(
        <div
          style={ styles.flipped }
          className={`block-${block.index} mine-${block.index}`}>
          <Icon type="fire" theme="twoTone" twoToneColor="#f5222d" style={{ fontSize: '20px' }} />
        </div>
      )
    }

    // 3. Handle flagged blocks
    if(block.is_flagged){
      return(
        <div
          className={`block-${block.index} flag-${block.index}`}
          onContextMenu={ (e) => { e.preventDefault(); this.onFlag(block);} }
          style={ this.props.game.has_won ? styles.winner : styles.unflipped }>
          <Icon type="flag" style={{ fontSize: '20px' }} />
        </div>
      )
    }

    // 4. Handle unflipped blocks
    return(
      <div
        className={`block-${block.index}`}
        style={ styles.unflipped }
        onClick={this.onFlip.bind(this, block)}
        onContextMenu={ (e) => { e.preventDefault(); this.onFlag(block);} } />
    )
  }
}

const styles = {
  // Style for blocks that are flipped
  flipped: {
    width: '100%',
    height: '32px',
    fontSize: '20px',
    fontWeight: '600',
    background: '#fff',
    textAlign: 'center',
    border: '1px solid black',
  },
  // Style for blocks that are unflipped
  unflipped: {
    width: '100%',
    height: '32px',
    cursor: 'pointer',
    paddingTop: '4px',
    textAlign: 'center',
    background: '#e8e8e8',
    border: '1px solid black',
  },
  // Style for mines when the game has been won
  winner: {
    width: '100%',
    height: '32px',
    cursor: 'pointer',
    paddingTop: '4px',
    textAlign: 'center',
    background: '#d9f7be',
    border: '1px solid black',
  },
  // Colors for the numbers or nearby mines
  0: { color: 'white' },
  1: { color: 'purple' },
  2: { color: 'blue' },
  3: { color: 'green' },
  4: { color: 'red' },
  5: { color: 'orange' },
  6: { color: 'yellow' },
  7: { color: 'brown' },
  8: { color: 'black' },
}

function mapStateToProps(state){
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ flipBlock, flagBlock }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Block)
