/* global fetch */
import 'whatwg-fetch'

export function loginUser (credentials) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(credentials)
  }
  return fetch('http://localhost:9000/api/auth/login', options)
    .then(response => response.json())
}
