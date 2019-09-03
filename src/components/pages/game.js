import React, { Component } from 'react'

import { Grid } from '../board'

class Game extends Component {
  render(){
    const { id } = this.props.match.params

    return(
      <Grid gameID={id} />
    )
  }
}

export default Game
