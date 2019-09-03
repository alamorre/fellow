import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import history from '../../functions/history'
import { newGame } from '../../actions/game'

import { Button } from 'antd'

class Start extends Component {
  /**
  * This function handles when a user gets started
  */
  onGetStarted(){
    this.props.newGame(() => {}, () => {})
  }

  render(){
    return(
      <Button onClick={this.onGetStarted.bind(this)}>
        Get Started!
      </Button>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ newGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Start)
