import React, { Component } from 'react'
import RegisterUserForm from './RegisterUserForm'
import Page from '../../components/Page/Page'
import Container from '../../components/Container/Container'
import { registerUser } from '../../services/ApiService'

export class RegisterPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.onChangeField = this.onChangeField.bind(this)
    this.onSubmitRegisterForm = this.onSubmitRegisterForm.bind(this)
  }

  onChangeField (event) {
    const { target } = event
    this.setState({ [target.name]: target.value })
  }

  onSubmitRegisterForm (event) {
    event.preventDefault()
    registerUser(this.state)
      .then(console.log)
      .catch(console.error)
  }

  render () {
    return (
      <Page title='Registrate'>
        <Container>
          <RegisterUserForm
            onChange={this.onChangeField}
            onSubmit={this.onSubmitRegisterForm}
            {...this.state}
          />
        </Container>
      </Page>
    )
  }
}

export default RegisterPage
