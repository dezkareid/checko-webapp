/* global fetch */
import 'whatwg-fetch'

export function getEvent () {
  return fetch('http://localhost:9000/event')
    .then(response => response.json())
}
