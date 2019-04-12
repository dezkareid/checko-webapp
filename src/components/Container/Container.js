import React from 'react'
import './Container.css'
export default function Container (props) {
  return (
    <div className='Container other'>
      {props.children}
    </div>
  )
}
