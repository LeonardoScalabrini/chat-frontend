import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { enviarMensagem } from '../../store/actions'

class EnviarMensagem extends Component {

  constructor (props) {
    super(props)
    this.state = {
      message: ''
    }

    this.enviarMensagem = this.enviarMensagem.bind(this)
  }

  enviarMensagem (e) {
    let message = this.messageInput.value
    this.props.enviarMensagem(message)
    this.setState({ message: '' })
  }

  render () {
    return (
      <Container align='center'>
        <Grid item xs={12} sm={6}>
          <TextField
            required
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
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant='contained'
            className='enviar-mensagem'
            onClick={this.enviarMensagem}
            color='primary'>
            Enviar Mensagem
          </Button>
        </Grid>
      </Container>
    )
  }
}

export default connect(null, {enviarMensagem})(EnviarMensagem)