import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import EventPage from '../pages/EventPage/EventPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
export function AppRouter (props) {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/events/:id' component={EventPage} />
      <Route path='/register' component={RegisterPage} />
    </Router>
  )
}

export default AppRouter
