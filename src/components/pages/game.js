import React, { Component } from 'react'

import { Grid, TopBar } from '../board'

class Game extends Component {
  render(){
    const { id } = this.props.match.params

    return(
      <div>
        {/* Top Bar of the Board */}
        <TopBar />

        {/* Board Grid */}
        <Grid gameID={id} />
      </div>
    )
  }
}

export default Game
