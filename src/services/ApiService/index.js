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

export function registerUser (user) {
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:9000/api/user/', options)
    .then(response => response.json())
}
