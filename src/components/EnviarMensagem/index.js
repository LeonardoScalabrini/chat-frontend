import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { enviarMensagem } from '../../store/actions'
import socketClient from "socket.io-client";
const SERVER = "http://localhost:9092";

class EnviarMensagem extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }
    this.enviarMensagem = this.enviarMensagem.bind(this)
  }

  componentDidMount() {
    this.configureSocket(); 
  }

  configureSocket = () => {
    this.socket = socketClient(SERVER);
  }

  enviarMensagem (e) {
    let message = this.messageInput.value
    this.props.enviarMensagem(message)
    this.setState({ message: '' })
    var jsonObject = { userName: 'userName', message: message };
    this.socket.emit('chatevent', jsonObject);
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
