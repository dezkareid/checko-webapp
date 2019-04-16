import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export function ListEvents ({ events, ...props }) {
  return (
    <List>
      { events.map(event =>
        <ListItem {...props} data-event={event._id} key={event._id}>{event.name}</ListItem>
      )}
    </List>
  )
}

export default ListEvents
