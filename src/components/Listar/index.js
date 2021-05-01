import React from 'react'
import Container from '@material-ui/core/Container'
import { connect } from 'react-redux'
import { messages } from '../../store/selectors'
import './style.css'

const Listar = ({messages}) => (
  <Container>
    <div class="well">
      {messages.map((item) => {
        return (
          <blockquote>
            <p>
              {item.value}
            </p>
          </blockquote>
        )
      })}
    </div>
  </Container>
)

export default connect(messages)(Listar)
