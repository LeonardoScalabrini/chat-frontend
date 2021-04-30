import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Erro extends Component {

  render () {
    return (
      <div>
        <h2>Ops! Pagina não encontrada!..</h2>
        <br/>
        <Link to='/'> Home
        </Link>
        <br/>
      </div>
    )
  }
}

export default Erro
