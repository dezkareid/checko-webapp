import React, { Component } from 'react'
import { getEvent } from '../../../services/ApiService'
import ListEvents from './ListEvents'

export class HomeListEvents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvent()
      .then(events => this.setState({ events }))
      .catch(console.error)
  }

  render () {
    return (
      <ListEvents events={this.state.events} />
    )
  }
}

export default HomeListEvents
