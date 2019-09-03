import React, { Component } from 'react'

import history from '../../functions/history'
import newGame from '../../actions'

import { Button } from 'antd'

class Start extends Component {
  /**
  * This function handles when a user gets started
  */
  onGetStarted(){}

  render(){

    return(
      <Button onClick={this.onGetStarted.bind(this)}>
        Get Started!
      </Button>
    )
  }
}

export default Start
