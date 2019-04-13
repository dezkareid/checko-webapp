/* global fetch */
import 'whatwg-fetch'

export function getEvent () {
  return fetch('http://localhost:9000/api/event')
    .then(response => response.json())
    .then(response => response.events)
}
