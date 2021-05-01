import React, { Component } from 'react'
import Listar from '../../components/Listar'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import EnviarMensagem from '../../components/EnviarMensagem'

class Home extends Component {

  render () {
    return (
      <Container>
        <Grid item xs={12} sm={12}>
          <Listar/>
        </Grid>
        <Grid item xs={12} sm={12}>
          <EnviarMensagem/>
        </Grid>
      </Container>
    )
  }
}

export default Home
