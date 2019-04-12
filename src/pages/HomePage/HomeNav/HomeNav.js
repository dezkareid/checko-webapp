import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'

export function HomeNav (props) {
  return (
    <AppBar position='static'>
      <Button color='inherit'>Dashboard</Button>
      <Button>Boletos</Button>
    </AppBar>
  )
}

export default HomeNav
