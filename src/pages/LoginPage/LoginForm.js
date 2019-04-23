import React from 'react'

export function LoginForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type='email' name='email' onChange={props.onChange} value={props.email} />
      <input type='password' name='password' onChange={props.onChange} value={props.password} />
      <button>Iniciar sesión</button>
    </form>
  )
}

export default LoginForm
