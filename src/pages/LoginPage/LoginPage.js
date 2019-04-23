import React, { Component } from 'react'
import Page from '../../components/Page/Page'
import Container from '../../components/Container/Container'
import LoginForm from './LoginForm'
import { loginUser } from '../../services/AuthService'

export class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.onChangeField = this.onChangeField.bind(this)
    this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this)
    this.redirectHome = this.redirectHome.bind(this)
  }

  onSubmitLoginForm (event) {
    event.preventDefault()
    loginUser(this.state)
      .then(this.redirectHome)
      .catch(console.error)
  }

  onChangeField (event) {
    const { target } = event
    this.setState({ [target.name]: target.value })
  }

  redirectHome () {
    this.props.history.push('/')
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
