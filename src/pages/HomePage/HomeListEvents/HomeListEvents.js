import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getEvents } from '../../../services/ApiService'
import ListEvents from './ListEvents'

export class HomeListEvents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
    this.goToEvent = this.goToEvent.bind(this)
  }

  goToEvent (event) {
    const element = event.target
    const eventId = element.dataset.event
    this.props.history.push(`events/${eventId}`)
  }

  componentDidMount () {
    getEvents()
      .then(events => this.setState({ events }))
      .catch(console.error)
  }

  render () {
    return (
      <ListEvents onClick={this.goToEvent} events={this.state.events} />
    )
  }
}

export default withRouter(HomeListEvents)
