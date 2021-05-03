import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { sendMessageHandler } from '../../store/actions'
import './style.css'

class SendMessage extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: '',
      chat: props.chat
    }
    this.messageHandler = this.messageHandler.bind(this)
  }

  messageHandler () {
    let message = this.messageInput.value
    var jsonObject = { '@class': 'com.chat.models.ChatObject', userName: 'userName', message: message }
    this.props.sendMessageHandler(this.state.chat, jsonObject)
    this.setState({ message: '' })
  }

  render () {
    return (
      <div className='sendMessage'>
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
          onClick={this.messageHandler}
          color='primary'>
          Enviar Mensagem
        </Button>
      </div>
    )
  }
}

export default connect(null, {sendMessageHandler})(SendMessage)
