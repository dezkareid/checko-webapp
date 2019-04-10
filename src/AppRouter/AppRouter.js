import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import EventPage from '../pages/EventPage/EventPage'
export function AppRouter (props) {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/events/:id' component={EventPage} />
    </Router>
  )
}

export default AppRouter
