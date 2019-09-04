import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Import functions
import history from '../../functions/history'
import { newGame } from '../../actions/game'

// Import components
import { Icon } from 'antd'
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
    return(
      <div style={{ position: 'fixed', top: '20%', width: '78%', textAlign: 'center' }}>
        <Icon className='horizontal-flip' type="loading" style={{ fontSize: 140, color: 'rgba(0, 0, 0, 0.65)', position: 'relative', left: '90px' }} spin />
        <Icon type="loading" style={{ fontSize: 180, color: '#1890ff', position: 'relative', left: '-70px', top: '15px' }} spin />
        <div style={{position: 'relative', top: '-90px', fontSize: '24px'}}>
          <b>Loading</b>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ newGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(Start)
