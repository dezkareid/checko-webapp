import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import Container from '../../components/Container/Container'
import LoginForm from './LoginForm'
import { loginUser } from '../../services/AuthService'
import { getUserInfo } from '../../services/ApiService'

export class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeField = this.onChangeField.bind(this)
    this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this)
  }

  onSubmitLoginForm (event) {
    event.preventDefault()
    loginUser(this.state)
      .then(getUserInfo)
      .then(console.log)
      .catch(console.error)
  }

  onChangeField (event) {
    const { target } = event
    this.setState({ [target.name]: target.value })
  }

  render () {
    return (
      <Page title='Iniciar sesión'>
        <Container>
          <LoginForm onSubmit={this.onSubmitLoginForm} onChange={this.onChangeField} {...this.state} />
        </Container>
      </Page>
    )
  }
}

export default LoginPage
