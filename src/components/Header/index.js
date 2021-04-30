import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

class Header extends Component {
  render () {
    return (
      <Typography component='h1' variant='h5' align='center'>
        Chat
      </Typography>
    )
  }
}

export default Header
