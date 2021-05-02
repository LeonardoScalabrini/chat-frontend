import React, { Component } from 'react'
import Routes from './router'
import { connect } from 'react-redux'
import { configureSocket, readMessage } from './socket'
import { enviarMensagem } from './store/actions'

class App extends Component {

  componentDidMount () {
    configureSocket()
    readMessage((data) => {
      this.props.enviarMensagem(data.message)
    })
  }

  render () {
    return (
      <div className='app'>
        <Routes/>
      </div>
    )
  }
}

export default connect(null, {enviarMensagem})(App)
