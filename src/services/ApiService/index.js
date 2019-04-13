/* global fetch */
import 'whatwg-fetch'

export function getEvents () {
  return fetch('http://localhost:9000/api/event')
    .then(response => response.json())
    .then(response => response.events)
}

export function getEvent (id) {
  return fetch(`http://localhost:9000/api/event/${id}`)
    .then(response => response.json())
}
