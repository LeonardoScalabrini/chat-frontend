import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './style.css'
import { Link } from 'react-router-dom'

class Disconnect extends Component {

  render () {
    return (
      <div className='disconnect'>
        <Button
          component={Link} to='/'
          fullWidth
          variant='contained'
          color='secondary'>
          Desconectar
        </Button>
      </div>
    )
  }
}

export default Disconnect
