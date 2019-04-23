import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import EventPage from '../pages/EventPage/EventPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
export function AppRouter (props) {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/events/:id' component={EventPage} />
        <Route path='/login' component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
