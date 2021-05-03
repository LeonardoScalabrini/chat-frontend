import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
const { REACT_APP_LIST_CHATS } = process.env

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      chats: REACT_APP_LIST_CHATS.split(',')
    }
  }

  render () {
    return (
      <Container>
        {this.state.chats.map(chat => {
           return (
             <Button
               key={chat}
               fullWidth
               className='button-chat'
               color='inherit'>
               <Link to={`/${chat}`}>
               {`#${chat}`}
               </Link>
             </Button>
           )})}
      </Container>
    )
  }
}

export default Home
