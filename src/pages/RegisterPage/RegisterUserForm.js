import React from 'react'

export function RegisterUserForm (props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input name='name' placeholder='Joel Humberto' onChange={props.onChange} value={props.name} />
      <input name='email' type='email' placeholder='joel@centraal.com' onChange={props.onChange} value={props.email} />
      <input name='password' type='password' placeholder='523tfahgsyxgywbuy' onChange={props.onChange} value={props.password} />
      <button>Registrarse</button>
    </form>
  )
}

export default RegisterUserForm
