import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import SendMessage from '../SendMessage'
import { connect } from 'react-redux'
import { messages } from '../../store/selectors'
import { configureSocket, readMessage } from '../../socket'
import { receiveMessage, listMessages } from '../../store/actions'
import './style.css'
import Disconnect from '../Disconnect'

const Chat = (props) => {
  const param = props.match.params.chat
  const receiveMessage = props.receiveMessage
  const listMessages = props.listMessages
  useEffect(() => {
    listMessages(param)
    configureSocket(param)
    readMessage(param, (data) => {
      receiveMessage(data)
    })
  }, [param, receiveMessage, listMessages])
  return (
    <Container>
      <div className='well'>
        {props.messages.map((item) => {
           return (
             <p key={item.id}>
               {item.message}
             </p>
           )
         })}
      </div>
      <SendMessage chat={param} />
      <Disconnect />
    </Container>
  )
}

export default connect(messages, {receiveMessage, listMessages})(Chat)
