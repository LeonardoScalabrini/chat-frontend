import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Erro from './pages/Erro'
import Chat from './components/Chat'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/:chat' component={Chat} />
        <Route path='*' component={Erro} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
