import React from 'react'
import { connect } from 'react-redux'
import { messages } from '../../store/selectors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Listar = ({messages}) => (
  <List className='list'>
    {messages.map((item) => {
       return (
         <ListItem key={item.id}>
           <ListItemText>
             {item.value}
           </ListItemText>
         </ListItem>
       )
     })}
  </List>
)

export default connect(messages)(Listar)
