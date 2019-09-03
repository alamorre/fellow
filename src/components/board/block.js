import React, { Component } from 'react'

import { Icon } from 'antd'

class Block extends Component {
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
          <div style={ styles.flipped }> 2 { block.is_mine && 'x' } </div>
        )
      }
    }

    // Handle flipped
    if(block.is_flagged){
      return(
        <div style={ styles.block }>
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
  block: {
    width: '100%',
    height: '32px',
    paddingTop: '4px',
    textAlign: 'center',
    background: '#e8e8e8',
    border: '1px solid black'
  },
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

export default Block
