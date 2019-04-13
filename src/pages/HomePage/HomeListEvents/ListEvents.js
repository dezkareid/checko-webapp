import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export function ListEvents ({ events }) {
  return (
    <List>
      { events.map(event =>
        <ListItem key={event._id}>
          <Link to={`/events/${event._id}`}>{event.name}</Link>
        </ListItem>
      )}
    </List>
  )
}

export default ListEvents
