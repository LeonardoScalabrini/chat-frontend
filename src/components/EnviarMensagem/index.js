import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { enviarMensagem } from '../../store/actions'
import { configureSocket, sendMessage } from '../../socket'

class EnviarMensagem extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
    this.enviarMensagem = this.enviarMensagem.bind(this)
  }

  componentDidMount () {
    configureSocket()
  }

  enviarMensagem (e) {
    let message = this.messageInput.value
    this.props.enviarMensagem(message)
    this.setState({ message: '' })
    var jsonObject = { userName: 'userName', message: message }
    sendMessage(jsonObject)
  }

  render () {
    return (
      <Container>
        <TextField
          id='messageInput'
          fullWidth
          variant='outlined'
          margin='normal'
          label='Mensagem'
          name='message'
          value={this.state.message}
          onChange={event => {
                      const { value } = event.target
                      this.setState({ message: value })
                    }}
          inputRef={(ev) => {
                      this.messageInput = ev
                    }} />
        <Button
          fullWidth
          variant='contained'
          className='enviar-mensagem'
          onClick={this.enviarMensagem}
          color='primary'>
          Enviar Mensagem
        </Button>
      </Container>
    )
  }
}

export default connect(null, {enviarMensagem})(EnviarMensagem)
