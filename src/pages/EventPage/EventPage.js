import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import { getEvent } from '../../services/ApiService'

export class EventPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  componentDidMount () {
    const { params: { id } } = this.props.match
    getEvent(id)
      .then(event => this.setState(event))
  }
  render () {
    return (
      <Page title={`Evento - ${this.state.name}`}>
        <h1>{this.state.name}</h1>
      </Page>
    )
  }
}

export default EventPage
