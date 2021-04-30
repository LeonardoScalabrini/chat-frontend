import React, { Component } from 'react'
import Listar from '../../components/Listar'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import EnviarMensagem from '../../components/EnviarMensagem'

class Home extends Component {

  render () {
    return (
      <Container align='center' style={{marginTop: '16px'}}>
        <Grid item xs={12} sm={6}>
          <Listar/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <EnviarMensagem/>
        </Grid>
      </Container>
    )
  }
}

export default Home
