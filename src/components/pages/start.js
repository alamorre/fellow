import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import functions
import history from '../../functions/history'
import { newGame } from '../../actions/game'

// Import components
import PageLoader from '../loader'
import { ErrorNotification } from '../notifications'

class Start extends Component {

  // On success, redirect after 1 sec
  onSuccess(data){
    setTimeout(
      function(){
        history.push(`/${data.id}`)
      }.bind(this),
      1000
    )
  }

  /**
  * This function handles when a user gets started
  */
  componentDidMount(){
    this.props.newGame(
      (data) => this.onSuccess(data),
      () => { ErrorNotification('There was a problem creating a new game...') }
    )
  }

  render(){
    return <PageLoader />
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ newGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Start)
