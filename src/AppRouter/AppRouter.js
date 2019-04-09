import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
export function AppRouter (props) {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
    </Router>
  )
}

export default AppRouter
